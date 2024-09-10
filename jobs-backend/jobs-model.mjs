// Models for the Movie Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Internal server error; could not connect. Please try again.' });
    } else  {
        console.log('Success! You have connected to the MongoDB Jobs collection.');
    }
});

// SCHEMA: Define the collection's schema.
const jobsSchema = mongoose.Schema({
	jobtitle:    { type: String, required: true },
    company:     { type: String, required: true },
	fromdate:    { type: Date, required: true, default: Date.now},
    enddate:     { type: Date, required: true, default: Date.now},
    teamsize:    { type: Number }
});

// Compile the model from the schema 
// by defining the collection name "movies".
const jobs = mongoose.model('Jobs', jobsSchema);


// CREATE model *****************************************
const createJob = async (jobtitle, company, fromdate, enddate, teamsize) => {
    const job = new jobs({ 
        jobtitle: jobtitle, 
        company: company,
        fromdate: fromdate, 
        enddate: enddate,
        teamsize: teamsize
    });
    return job.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveJobs = async () => {
    const query = jobs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveJobByID = async (_id) => {
    const query = jobs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteJobById = async (_id) => {
    const result = await jobs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateJob = async (_id, jobtitle, company, fromdate, enddate, teamsize) => {
    const result = await jobs.replaceOne({_id: _id }, {
        jobtitle: jobtitle, 
        company: company,
        fromdate: fromdate, 
        enddate: enddate,
        teamsize: teamsize
    });
    return { 
        _id: _id, 
        jobtitle: jobtitle, 
        company: company,
        fromdate: fromdate, 
        enddate: enddate,
        teamsize: teamsize
    }
}

// EXPORT the variables for use in the controller file.
export { createJob, retrieveJobs, retrieveJobByID, updateJob, deleteJobById }