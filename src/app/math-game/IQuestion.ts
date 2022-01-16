import { QuestionOutcomes } from "./QuestionOutcomes";

export interface IQuestion
{
    question: string
    answer: number
    options: number[]
    duration: number
    result:QuestionOutcomes
    actualAnswer: number
}