// TODO
import { prisma } from "./../config/database";
import * as questionService from "../services/questionService";

async function insert(createQuestionData: questionService.CreateQuestionData) {
  await prisma.question.create({
    data: createQuestionData
  });
}

async function findById(id: number) {
  return prisma.question.findUnique({
    where: { id },
    include: {
      answers: true
    }
  });
}

async function findAll() {
  return prisma.question.findMany()
}

export{
  insert,
  findById,
  findAll
};
