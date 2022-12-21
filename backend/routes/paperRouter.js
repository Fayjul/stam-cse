import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Paper from '../models/paperModel.js';

const paperRouter = express.Router();

paperRouter.get('/', async (req, res) => {
  const papers = await Paper.find();
  console.log('I am in database');
  res.send(papers);
});

paperRouter.post(
  '/upload',
  expressAsyncHandler(async (req, res) => {
    const newPaper = new Paper({
      paperName: req.body.paperName,
      topic: req.body.topic,
      pdf: req.body.pdf,
      batch: req.body.batch,
    });
    const paper = await newPaper.save();
    console.log(
      req.body.paperName,
      req.body.topic,
      req.body.pdf,
      req.body.batch
    );
  })
);

export default paperRouter;
