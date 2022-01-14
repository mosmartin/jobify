export const getAllJobs = async (req, res) => {
  res.status(200).json({ message: 'Get All Jobs' });
};

export const createJob = async (req, res) => {
  res.status(200).json({ message: 'Create Job' });
};

export const updateJob = async (req, res) => {
  res.status(201).json({ message: 'Update Job' });
};

export const deleteJob = async (req, res) => {
  res.status(200).json({ message: 'Delete Job' });
};

export const showStats = async (req, res) => {
  res.status(200).json({ message: 'Show Stats' });
};
