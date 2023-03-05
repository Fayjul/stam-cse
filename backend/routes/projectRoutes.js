import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';

const projectRouter = express.Router();

projectRouter.get('/', async (req, res) => {
  const project = await Project.find();
  //const papers = await Paper.find();
  console.log('I am in database from project Router');
  res.send(project);
});
projectRouter.get('/search', async (req, res) => {
  const project = await Project.find({ course: 'Database' });
  //const papers = await Paper.find();
  console.log('I am in database from project Router');
  res.send(project);
});
projectRouter.post(
  '/upload',
  expressAsyncHandler(async (req, res) => {
    // console.log(req.body);
    const newProject = new Project({
      projectName: req.body.projectName,
      batch: req.body.batch,
      course: req.body.course,
      description: req.body.description,
      video: req.body.videoLink,
      github: req.body.github,
    });
    const project = await newProject.save();
    //console.log(project);
    //res.send(project);
  })
);

export default projectRouter;
