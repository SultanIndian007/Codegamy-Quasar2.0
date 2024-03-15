'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [stories, setStories] = useState([]);
  const [selectedOption, setSelectedOption] = useState('top');
  const [pageTitle, setPageTitle] = useState('Top News Articles'); // Track page title

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url;

        if (selectedOption === 'new') {
          url = 'https://hacker-news.firebaseio.com/v0/newstories.json';
        } else {
          url = `https://hacker-news.firebaseio.com/v0/${selectedOption}stories.json`;
        }

        const response = await axios.get(url);
        const storyIds = response.data;

        if (!Array.isArray(storyIds)) {
          console.warn(`No story IDs found for ${selectedOption}stories`);
          setStories([]);
          return;
        }

        const storyPromises = storyIds.slice(0, 20).map(storyId =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(response => response.data)
        );

        Promise.all(storyPromises)
          .then(stories => {
            setStories(stories);
          })
          .catch(error => {
            console.error('Error fetching stories:', error);
          });
      } catch (error) {
        console.error(`Error fetching ${selectedOption} story IDs:`, error);
      }
    };

    fetchNews();
  }, [selectedOption]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setPageTitle(option === 'top' ? 'Top News Articles' : option === 'new' ? 'Newest Articles' : 'Job Listings'); // Update page title based on option
    document.title = pageTitle; // Update browser tab title dynamically
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <div className="news-container w-full max-w-3xl bg-white p-4 rounded shadow-md">
        <div className="flex justify-end mb-4">
          <button
            className={`option-button mr-4 ${selectedOption === 'top' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('top')}
          >
            Top
          </button>
          <button
            className={`option-button ${selectedOption === 'new' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('new')}
          >
            Newest
          </button>
          <button
            className={`option-button ml-4 ${selectedOption === 'job' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('job')}
          >
            Jobs
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">{pageTitle}</h1> {/* Display dynamic title */}
        <ol className="card-container flex flex-col gap-4">
          {stories.map((story, index) => (
            <li key={story.id} className="card flex items-center">
              <span className="card-number text-xl font-bold text-gray-500 pr-4">
                {index + 1}
              </span>
              <div className="card-content">
                <h2 className="card-title">{story.title}</h2>
                <p className="card-description">
                  <span style={{ color: '#FF6600' }}>{story.by ? `source: ${story.by}` : ''}</span> •
                  <span>{story.score} points</span> •
                  <span>{story.descendants || 0} comments</span>
                </p>
                <a href={story.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                  Read More
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default NewsPage;