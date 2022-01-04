import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { shuffle } from "../utils/shuffle"
import { htmlEntity } from "../utils/htmlEntity"
import { api } from '../service/api'
import moment from 'moment'

type IAnswerOptions = {
    answerText: string,
    isCorrect: boolean,
    color?: string,
    selected: boolean
}

export type IQuestion = {
    questionText: string;
    answerOptions: IAnswerOptions[]
}

type IQuestionsContext = {
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;
    questions: IQuestion[];
    currentQuestion: number;
    setCurrentQuestion: Dispatch<SetStateAction<number>>;
    showScore: boolean;
    setShowScore: Dispatch<SetStateAction<boolean>>;
    score: number
    setScore: Dispatch<SetStateAction<number>>;
    init: boolean;
    setInit: Dispatch<SetStateAction<boolean>>;
    handleAnswerOptionClick: (answerOptions: IAnswerOptions) => void;
    onResume: boolean;
    setOnResume: Dispatch<SetStateAction<boolean>>;
}

type IResultQuestions = {
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type IQuestionsHelper = {
    score: number;
    date: string;
    questions: IQuestion[]
}
type IQuestionProvider = {
    children: ReactNode
}

export const QuestionsContext = createContext({} as IQuestionsContext)

const results: IResultQuestions[] = []
export function QuestionProvider(props: IQuestionProvider) {

    const [init, setInit] = useState<boolean>(false)
    const [amount, setAmount] = useState<number>(0)
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [onResume, setOnResume] = useState<boolean>(false)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    function handleAnswerOptionClick(answerOption: IAnswerOptions): void {
        if (answerOption.isCorrect) {
            Object.assign(answerOption, { selected: true, color: "green" })
            setScore(score + 1);
        }

        if (!answerOption.isCorrect) {
            Object.assign(answerOption, { selected: true, color: "red" })
            questions[currentQuestion].answerOptions.forEach(element => {
                if (element.isCorrect) {
                    element.color = "green"
                }
            })
        }
        console.log(questions[currentQuestion])

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            const helperQuestions: IQuestionsHelper[] = []
            const date = moment().format('LLL')
            const stringQuestions: string = localStorage.getItem('@quizSavedQuestions') as string
            const savedQuestions: IQuestionsHelper[] = JSON.parse(stringQuestions)

            if (savedQuestions) {
                savedQuestions.unshift({ score, date, questions })
                localStorage.removeItem('@quizSavedQuestions')
                localStorage.setItem('@quizSavedQuestions', JSON.stringify(savedQuestions))

            }

            if (!savedQuestions) {
                helperQuestions.unshift({ score, date, questions })
                localStorage.setItem('@quizSavedQuestions', JSON.stringify(helperQuestions))
            }

            setShowScore(true)
        }
    }

    useEffect(() => {
        async function getQuestionsAndTransformStructureOfQuestions() {
            try {
                const { data } = await api.get(`api.php?amount=${amount}`)
                console.log(data.results)
                results.push(...data.results)

                const questionHelper: IQuestion[] = []
                results.forEach(element => {
                    const answerOptionsHelper: IAnswerOptions[] = []
                    if (element.type === 'multiple') {
                        const answerText0 = htmlEntity(element.incorrect_answers[0])
                        const answerText1 = htmlEntity(element.incorrect_answers[1])
                        const answerText2 = htmlEntity(element.incorrect_answers[2])
                        const answerText4 = htmlEntity(element.correct_answer)

                        answerOptionsHelper.push(
                            {
                                answerText: answerText0, isCorrect: false, selected: false
                            },
                            {
                                answerText: answerText1, isCorrect: false, selected: false
                            },
                            {
                                answerText: answerText2, isCorrect: false, selected: false
                            },
                            {
                                answerText: answerText4, isCorrect: true, selected: false
                            }
                        )

                    }

                    if (element.type === 'boolean') {
                        const answerText0 = htmlEntity(element.incorrect_answers[0])
                        const answerText1 = htmlEntity(element.correct_answer)
                        answerOptionsHelper.push(
                            {
                                answerText: answerText1, isCorrect: true, selected: false
                            },
                            {
                                answerText: answerText0, isCorrect: false, selected: false
                            })
                    }
                    const answerOptions = shuffle(answerOptionsHelper)
                    const questionText = htmlEntity(element.question)

                    questionHelper.push({
                        questionText: questionText,
                        answerOptions
                    })

                })

                setQuestions(questionHelper)
                console.log(questions)

            } catch (error) {
                alert("Ocorreu um erro ao buscar as questões, tente novamente!");
            }
        }
        
            getQuestionsAndTransformStructureOfQuestions()

    }, [amount])


    return (

        <QuestionsContext.Provider value={{
            onResume, setOnResume,
            setAmount, init, setInit,
            amount, questions, currentQuestion, setCurrentQuestion,
            showScore, setShowScore, score, setScore, handleAnswerOptionClick
        }}>
            {props.children}
        </QuestionsContext.Provider>
    )

}