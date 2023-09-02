import React from "react";

const JobList = ({ jobs }) => {

  if (!Array.isArray(jobs) || jobs.length === 0) {
    return (
      <div className="job-list-container">
        <h2>Job Listings</h2>
        <p>No jobs found.</p>
      </div>
    );
  }

  return (
    <div className="job-list-container">
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.jobId}>
            <h3>{job.position}</h3>
            <p>Location: {job.location}</p>
            <p>Category: {job.category ? job.category.name : "N/A"}</p>
            <p>Type: {job.type.name}</p>
            <p>Company name: {job.companyName}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <button>Apply</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
