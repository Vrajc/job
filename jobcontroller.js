const Job = require('../models/Job');

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new job
const createJob = async (req, res) => {
  try {
    const { title, company, location, description } = req.body;
    const newJob = new Job({ title, company, location, description });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getJobs, createJob };
