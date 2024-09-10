import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobList from './JobList';
import { Link } from 'react-router-dom';

function JobsPage({setJob}){
    const redirect = useNavigate();
    const [jobs, setJobs] = useState([]);

    const loadJobs =  async () => {
        const response = await fetch ('/jobs');
        const jobs = await response.json();
        setJobs(jobs);
    }

    const onEditJob = async job => {
        setJob(job);
        redirect("/update");
    }

    const onDeleteJob = async _id => {
        const response = await fetch(`/jobs/${_id}`, { method: 'DELETE' });
          if (response.status === 200) {
             const getResponse = await fetch('/jobs');
             const jobs = await getResponse.json();
             setJobs(jobs);
        } else {
             console.error(`There was an error deleting the job. Please try again. = ${_id}, status code = 
             ${response.status}`)
          }
      }

      useEffect(() =>{
        loadJobs();
      }, []);

    return (
        <>
            <h2>List of Jobs</h2>
                <article>
                    <p>Here you can view a list of all previous jobs held.</p>

                    <Link to="/create">Add Job</Link>

                    <JobList
                        jobs={jobs}
                        onEdit={onEditJob}
                        onDelete={onDeleteJob}
                    />
                </article>
        </>
    )
}

export default JobsPage;