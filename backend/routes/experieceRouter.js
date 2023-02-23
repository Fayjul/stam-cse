import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Experience from '../models/experienceModel.js';

const experienceRouter = express.Router();

experienceRouter.get('/', async (req, res) => {
  const experiences = await Experience.find();
  console.log('I am in database from experience');
  res.send(experiences);
});

experienceRouter.post(
  '/upload',
  expressAsyncHandler(async (req, res) => {
    const newExperience = new Experience({
      name: req.body.name,
      batch: req.body.batch,
      experience: req.body.experience,
    });
    const experience = await newExperience.save();
    console.log(newExperience);
  })
);

export default experienceRouter;
