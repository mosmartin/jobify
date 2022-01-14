import express from 'express';
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from '../controllers/jobs.controller.js';

const router = express.Router();

router.route('/').get(getAllJobs).post(createJob);

router.route('/:id').put(updateJob).delete(deleteJob);

router.route('/stats').get(showStats);

export default router;
