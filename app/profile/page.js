
'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProfileSection() {
  const [userInfo, setUserInfo] = useState({
    username: "sultan",
    rankings: {
      problems: {
        total: 50,
        solved: 30,
        easy: {
          total: 20,
          solved: 15
        },
        medium: {
          total: 20,
          solved: 10
        },
        tough: {
          total: 10,
          solved: 5
        }
      }
    },
    badges: [
      { name: "Guardian", image: "/guardian.jpeg" },
      { name: "January", image: "/january.jpg" },
      { name: "June", image: "/june.png" },
      { name: "July", image: "/july.png" }
    ], 
    age: 20,
    gender: "Male",
    college: "IIT Bombay",
    city: "Mumbai",
    country: "India",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sultan",
      twitter: "https://twitter.com/sultan",
      github: "https://github.com/sultan"
    },
    skills: {
      Advanced: [
        { name: "Dynamic Programming ", count: 143 },
        { name: "Union Find", count: 27 },
        { name: "Backtracking", count: 25 },
        { name: "Divide and Conquer", count: 18 },
      ],
      Intermediate: [
        { name: "Hash Table", count: 165 },
        { name: "Math", count: 111 },
        { name: "Depth-First Search", count: 96 },
      ],
      Fundamental: [
        { name: "Array", count: 436 },
        { name: "String", count: 165 },
        { name: "Sorting", count: 124 },
        { name: "Two Pointers", count: 72 },
        { name: "Matrix", count: 61 },
        { name: "Simulation", count: 39 },
        { name: "Stack", count: 39 },
        { name: "Linked List", count: 34 }
      ]
    }
  });

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await axios.get("/api/userinfo");
        const data = response.data;
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }

    fetchUserInfo();
  }, []);

  useEffect(() => {
    renderLineChart();
  }, []);

  const renderLineChart = () => {
    const ratingsData = [1500, 1550, 1600, 1650, 1630, 1700, 1750, 1778,1800,1900,2000]; 

    const chartData = {
      labels: ratingsData.map((_, index) => index + 1),
      datasets: [{
        label: "Contest Ratings",
        data: ratingsData,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4
      }]
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Contest Number'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Contest Rating'
          }
        }
      }
    };

    const ctx = document.getElementById('contestRatingChart');
    if (ctx) {
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
      });
    }
  };

  return (
    <div className="flex justify-between p-6">
      <div className="w-1/3 pr-6">
        {/* Social Links and Skills */}
        <div className="mt-2">
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Links</h3>
            <ul className="list-disc list-inside">
              {Object.entries(userInfo.socialLinks).map(([platform, link]) => (
                <li key={platform}>
                  <a href={link} target="_blank" rel="noopener noreferrer">{platform}</a>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
            {Object.entries(userInfo.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h4 className="text-md font-semibold text-gray-700 mb-2">{category}</h4>
                <ul className="list-disc list-inside">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill.name}x{skill.count}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 pl-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {userInfo.username}
            </h2>
            <p>
              <span className="text-gray-500">{userInfo.rankings.problems.solved}</span> / <span className="text-gray-500">{userInfo.rankings.problems.total}</span>
            </p>
              <span className="text-gray-500"> problems solved</span>
          </div>
          <div>
            <canvas id="contestRatingChart"></canvas>
          </div>
            <div>
              {/* Contest Ratings */}
            </div>
          </div>
          <div>
            <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Progress</h3>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">Easy:</div>
            <div className="flex-1 bg-gray-200 h-4 rounded">
              <div
                className="bg-green-500 h-full rounded"
                style={{ width: `${(userInfo.rankings.problems.easy.solved / userInfo.rankings.problems.easy.total) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">Medium:</div>
            <div className="flex-1 bg-gray-200 h-4 rounded">
              <div
                className="bg-yellow-500 h-full rounded"
                style={{ width: `${(userInfo.rankings.problems.medium.solved / userInfo.rankings.problems.medium.total) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">Tough:</div>
            <div className="flex-1 bg-gray-200 h-4 rounded">
              <div
                className="bg-red-500 h-full rounded"
                style={{ width: `${(userInfo.rankings.problems.tough.solved / userInfo.rankings.problems.tough.total) * 100}%` }}
              />
            </div>
          </div>
        </div>
          </div>
          <div className="mt-6">
            <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Badges</h3>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={true} // Center the content
            className=""
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true} // Arrows outside the carousel
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 2,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            showDots="false"
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {userInfo.badges.map((badge, index) => (
              <div key={index} className="flex justify-center items-center h-40">
                <img src={badge.image} alt={badge.name} className="w-24 h-24" />
              </div>
            ))}
          </Carousel>
        </div>
          </div>
          <div className="mt-6">
            <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Info</h3>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">Age:</div>
            <div className="text-gray-800">{userInfo.age}</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">Gender:</div>
            <div className="text-gray-800">{userInfo.gender}</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">College:</div>
            <div className="text-gray-800">{userInfo.college}</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">City:</div>
            <div className="text-gray-800">{userInfo.city}</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-24 mr-2">Country:</div>
            <div className="text-gray-800">{userInfo.country}</div>
          </div>
        </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
  