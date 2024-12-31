import React from 'react';
// import jobs from '../jobs.json'

import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  // NOT NEEDED anymore since we are using useState and useEffect, but left here as reference
  // Display only the first 3 jobs on page ONLY if it's the home page
  // Display all jobs if we are on job listings page
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState([]);
  
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {  // Runs regardless if fails or not
        setLoading(false);
      }
    }
  
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
          {loading ? (
            <Spinner loading={ loading } /> 
            ) : (
              // Placed here instead of outside Spinner so the spinner is centered instead of
              // to the left
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { jobs.map((job) => (
                  <JobListing key={ job.id } job= { job } />
                ))}
              </div>
            )}
      </div>
    </section>
  )
}

export default JobListings