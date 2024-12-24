import React, { useState, useEffect, useCallback } from 'react';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');

  const fetchJobs = useCallback(async () => {
    try {
      const url = searchLocation
        ? `https://jobfinder-production-606a.up.railway.app/api/jobs?location=${encodeURIComponent(searchLocation)}`
        : 'https://jobfinder-production-606a.up.railway.app/api/jobs';
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }, [searchLocation]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleSearch = (location) => {
    setSearchLocation(location);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <JobList jobs={jobs} onJobClick={handleJobClick} />
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
}

export default App;

