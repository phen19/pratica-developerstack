import { Request, Response } from 'express';
import * as questionService from '../services/questionService'
import * as answerService from '../services/answerService'

async function createQuestion(req: Request, res: Response) {
  // TODO
  const question: questionService.CreateQuestionData = req.body;
  await questionService.insert(question);
  
  res.sendStatus(201);
}

async function createAnswer(req: Request, res: Response) {
  // TODO
  const answer: answerService.CreateAnswerData = req.body;
  const questionId = parseInt(req.params.id);
  await answerService.insert({ ...answer, questionId });
  
  res.sendStatus(201);
}

async function get(req: Request, res: Response) {
  // TODO
  const questions = await questionService.findAll();
  
  res.send(questions);
}

async function getById(req: Request, res: Response) {
  // TODO
  const id = parseInt(req.params.id);
  const question = await questionService.findById(id);
  
  res.send(question);
}

export {
  createAnswer, createQuestion, get, getById
}