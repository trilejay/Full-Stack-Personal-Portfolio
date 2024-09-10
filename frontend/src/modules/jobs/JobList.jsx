import Job from "../Job";
import React from "react";

function JobList ({jobs, onDelete, onEdit}) { return (
    <>
    <article>
    <table id="jobs">
    <caption>Add and Edit Jobs</caption>
    <thead>
        <tr>
            <th>Title</th>
            <th>Company</th>
            <th>From date</th>
            <th>End date</th>
            <th>Team Size</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
    {jobs.map((job, i) => 
     <Job 
        job={job} 
        key={i} 
        onDelete={onDelete}
        onEdit={onEdit}
    />)}
    </tbody>
    </table>
    </article>
    </>
    )
}

export default JobList;