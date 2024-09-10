import React, {useState } from 'react';
import {useNavigate } from "react-router-dom";

export const JobAdd = () => {
    // Define a state and update state variable for each parameter in the schema: 
    const [jobtitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [fromdate, setFromDate] = useState('');
    const [enddate, setEndDate] = useState('');
    const [teamsize, setTeamSize] = useState('');

    const redirect = useNavigate();

    const addJob = async () => {
        const newJob = { jobtitle, company, fromdate, enddate, teamsize };
        const response = await fetch('/jobs', {
              method: 'post',
              body: JSON.stringify(newJob),
              headers: {
                  'Content-Type': 'application/json',
              },
          });
        if(response.status === 201){
              alert(`Job has been successfully added.`);
        } else {
              alert(`There was an error trying to add the job. Please try again later. Error code = ${response.status}`);
        }
        redirect("/jobsPage");
  };

  return (
    <>
    <h2>Here you can add a job listing.</h2>
        <article>
        <p>Enter the new job information below:</p>
        <table id="jobs">
            <caption>Which job are you adding?</caption>
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>From Date</th>
                    <th>End Date</th>
                    <th>Team Size (1-1000)</th>
                    <th>Submit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="jobtitle"></label>
                        <input 
                            type="text" 
                            placeholder="Title of the job" 
                            id="jobtitle"
                            value={jobtitle}
                            onChange={e => setJobTitle(e.target.value)} 
                        />
                    </td>
                    <td>
                        <label htmlFor="company"></label>
                        <input
                            type="text"
                            placeholder="Name of company"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="fromdate"></label>
                        <input
                            type="date"
                            placeholder="From date"
                            id="fromdate"
                            value={fromdate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="enddate"></label>
                        <input
                            type="date"
                            placeholder="End date"
                            id="enddate"
                            value={enddate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </td>
                    <td>
                        <label htmlFor="teamsize"></label>
                        <input
                            type="number"
                            placeholder="Team size"
                            id="teamsize"
                            min="1"
                            max="1000"
                            value={teamsize}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value === '' || (value >= 1 && value <= 1000)) {
                                  setTeamSize(value);
                                }
                              }}
                            />
                    </td>
                    <td>
                        <label htmlFor="submit">
                        <button type="submit" id="submit" onClick={addJob}>Add Job</button></label>
                    </td>
                </tr>
            </tbody>
            </table>
        </article>
    </>
  )   
}

export default JobAdd;