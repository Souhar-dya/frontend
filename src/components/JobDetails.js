import React from 'react';

function JobDetails({ job }) {
  if (!job) {
    return <div className="job-details">Select a job to view details</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Employment Type:</strong> {job.employmentType}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Source:</strong> {job.source}</p>
      <p><strong>Posted Date:</strong> {new Date(job.postedDateTime).toLocaleDateString()}</p>
      <p><strong>Job Link:</strong> <a href={job.jobLink} target="_blank" rel="noopener noreferrer">Apply Here</a></p>
      {job.companyImageUrl && <img src={job.companyImageUrl} alt={`${job.company} logo`} className="company-logo" />}
    </div>
  );
}

export default JobDetails;

