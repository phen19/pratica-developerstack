// TODO
import { Answer } from "@prisma/client";
import * as answerRepository from "./../repositories/answerRepository";

export type CreateAnswerData = Answer;

async function insert(createAnswerData: CreateAnswerData) {
  await answerRepository.insert(createAnswerData);
}

export{
  insert
};
