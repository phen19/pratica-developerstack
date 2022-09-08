// TODO
import { Answer } from "@prisma/client";
import * as answerRepository from "./../repositories/answerRepository";
import * as questionRepository from "./../repositories/questionRepository";

export type CreateAnswerData = Answer;

async function insert(createAnswerData: CreateAnswerData) {
  const question = await questionRepository.findById(createAnswerData.questionId);
  if (!question) throw { type: "not_found" };
  await answerRepository.insert(createAnswerData);
}

export{
  insert
};
