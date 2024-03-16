'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto"; // Import Chart.js library
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
      { name: "Knight", image: "/knight_badge.png" },
      { name: "Soldier", image: "/soldier.png" },
      { name: "January", image: "/january.jpg" },
      { name: "June", image: "/june.png" },
      { name: "July", image: "/july.png" }
    ], 
    age: 20,
    gender: "Male",
    college: "IIT Bombay",
    city: "Mumbai",
    country: "India"
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
    const ratingsData = [1500, 1550, 1600, 1650, 1630]; 

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
      // Ensure any existing chart instance is destroyed before rendering a new one
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      // Render the new chart
      new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
      });
    }
  };

  return (
    <section className="max-w-lg mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {userInfo.username}
            </h2>
            <p>
              <span className="text-gray-500">{userInfo.rankings.problems.solved}</span> / <span className="text-gray-500">{userInfo.rankings.problems.total}</span>
            </p>
          </div>
          <div>
            <canvas id="contestRatingChart"></canvas>
          </div>
        </div>
        
        {/* Progress Bars for Easy, Medium, and Tough Problems */}
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
        
        {/* Badges Carousel */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Badges</h3>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
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
              <img key={index} src={badge.image} alt={badge.name} className="w-24 h-24" />
            ))}
          </Carousel>
        </div>
        
        {/* Additional functionalities from UserInfo */}
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
    </section>
  );
}
