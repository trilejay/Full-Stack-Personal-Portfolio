import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const JobEdit = ({ jobToEdit }) => {

    const [jobtitle, setJobTitle] = useState(jobToEdit.jobtitle);
    const [company, setCompany] = useState(jobToEdit.company);
    const [fromdate, setFromDate] = useState(jobToEdit.fromdate.split('T')[0]); 
    const [enddate, setEndDate] = useState(jobToEdit.enddate.split('T')[0]);
    const [teamsize, setTeamSize] = useState(jobToEdit.teamsize);

    const redirect = useNavigate();

    const editJob = async () => {
        const response = await fetch(`/jobs/${jobToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                jobtitle: jobtitle, 
                company: company, 
                fromdate: fromdate,
                enddate: enddate,
                teamsize: teamsize,

            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Job has successfully been edited.`);
        } else {
            const errMessage = await response.json();
            alert(`There was an error trying to edit the job. Please try again later. Error code = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/jobsPage");
    }

    return(
        <>
        <h2>Edit a job</h2>
        <article>
        <p>Here you can edit a job listing.</p>
        <table>
            <caption>Enter the new information about this job below:</caption>
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
                        <button type="submit" id="submit" onClick={editJob}>Edit Job</button></label>
                    </td>
                </tr>
            </tbody>
        </table>
        </article>
        </>
    )
}
export default JobEdit;
