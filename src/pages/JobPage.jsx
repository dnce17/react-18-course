import React from 'react';
import { useState, useEffect } from 'react';

// Allows you to get id
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  const { id } = useParams();  // { id } --> means you're destructuring to get id
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${ id }`);
        const data = await res.json();
        console.log(data);
        setJob(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {  // Runs regardless if fails or not
        setLoading(false);
      }
    }

    fetchJob();
  }, []);


  return (
    loading ? <Spinner /> : <h1>{ job.title }</h1>
  )
}

export default JobPage