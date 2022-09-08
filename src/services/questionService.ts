// TODO
import { Question } from "@prisma/client";
import * as questionRepository from "../repositories/questionRepository";

export type CreateQuestionData = Omit<Question, "id">;

async function insert(createQuestionData: CreateQuestionData) {
  await questionRepository.insert(createQuestionData);
}

async function findById(questionId: number) {
  const question = await questionRepository.findById(questionId);
  if (!question) throw { type: "not_found" };

  return question;
}

async function findAll() {
  return questionRepository.findAll();
}

export {
  insert,
  findById,
  findAll,
};
