import React from 'react';

function JobList({ jobs, onJobClick }) {
  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id} onClick={() => onJobClick(job)}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

