import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

function Job({ job, onEdit, onDelete}) {

    const formatDate = date => {
        const newDate = new Date(date);
        return newDate.toISOString().split('T')[0];
    };

    return (
        <tr>
            <td>{job.jobtitle}</td>
            <td>{job.company}</td>
            <td>{formatDate(job.fromdate)}</td>
            <td>{formatDate(job.enddate)}</td>
            <td>{job.teamsize}</td>
            <td><RiDeleteBin5Fill style={{cursor: 'pointer'}} onClick={() => onDelete(job._id)} /></td>
           <td><MdOutlineEdit style={{cursor: 'pointer'}} onClick={() => onEdit(job)} /></td>
        </tr>
    );
}

export default Job;