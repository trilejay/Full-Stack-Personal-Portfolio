// Controllers for the Movie Collection

import 'dotenv/config';
import express from 'express';
import * as jobs from './jobs-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/jobs', (req,res) => { 
    jobs.createJob(
        req.body.jobtitle, 
        req.body.company, 
        req.body.fromdate,
        req.body.enddate,
        req.body.teamsize
        )
        .then(job => {
            console.log(`"${job.jobtitle}" document was successfully added to the collection.`);
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Cannot process the request to the server, please try again later.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/jobs', (req, res) => {
    jobs.retrieveJobs()
        .then(jobs => { 
            if (jobs !== null) {
                console.log(`All job documents were retrieved from the collection.`);
                res.json(jobs);
            } else {
                res.status(404).json({ Error: 'Unable to retrieve job documents. The collection may be empty.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There was an error while attempting to retrieve job documents.' });
        });
});


// RETRIEVE by ID controller
app.get('/jobs/:_id', (req, res) => {
    jobs.retrieveJobByID(req.params._id)
    .then(job => { 
        if (job !== null) {
            console.log(`"${job.title}" was retrieved, based on its ID.`);
            res.json(job);
        } else {
            res.status(404).json({ Error: 'Unique and specific error message.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unique and specific error message.' });
    });

});


// UPDATE controller ************************************
app.put('/jobs/:_id', (req, res) => {
    jobs.updateJob(
        req.params._id, 
        req.body.jobtitle, 
        req.body.company,
        req.body.fromdate, 
        req.body.enddate,
        req.body.teamsize
    )
    .then(job => {
        console.log(`"${job.jobtitle}" document has successfully been updated.`);
        res.json(job);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'There was an unexpected error when trying to update the job document.' });
    });
});


// DELETE Controller ******************************
app.delete('/jobs/:_id', (req, res) => {
    jobs.deleteJobById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`${deletedCount} job document has been removed from the collection.`);
                res.status(200).send({ Success: 'The job document has successfully been deleted.' });
            } else {
                res.status(404).json({ Error: 'There was an error trying to delete the job document; the document may not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'There was an unexpected error trying to delete the job document.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});