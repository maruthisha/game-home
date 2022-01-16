import { IQuestion } from "./IQuestion";

export interface IGameInformation
{
    totalQuestions: number
    score: number
    wrong: number
    questions: IQuestion[]
}