// pages/index.js

'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    college: '',
    city: '',
    country: '',
    phone: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    console.log("Handle change called");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    console.log("Handle submit called");
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      console.log("Trying to submit form data:", formData);
      const response = await axios.post('/api/form', formData); 
      console.log("Response after form submission:", response);
      setSuccess('Form data submitted successfully!');
    } catch (error) {
      console.error("Error occurred during form submission:", error);
      setError(error.response?.data?.message || 'An error occurred.');
    } finally {
      console.log("Finally block executed");
      setIsLoading(false);
      setFormData({
        name: '',
        age: '',
        gender: '',
        college: '',
        city: '',
        country: '',
        phone: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-medium">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="age" className="text-gray-700 font-medium">
          Age:
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="gender" className="text-gray-700 font-medium">
          Gender:
        </label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="college" className="text-gray-700 font-medium">
          College:
        </label>
        <input
          type="text"
          name="college"
          id="college"
          value={formData.college}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="city" className="text-gray-700 font-medium">
          City:
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="country" className="text-gray-700 font-medium">
          Country:
        </label>
        <input
          type="text"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-gray-700 font-medium">
          Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        disabled={isLoading}
      >
        Submit
      </button>
    </form>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Fill out the form</h1>
        <Form />
      </div>
    </div>
  );
}
