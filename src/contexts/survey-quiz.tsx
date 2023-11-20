import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  Dispatch,
  SetStateAction
} from 'react'
import { Option } from 'types'

type SurveyStatus = 'ready' | 'in-progress' | 'done'

type QuestionResponse = {
  question: string
  answer: Option | undefined
}

interface SurveyQuizContextType {
  surveyId: number
  questionNumber: number
  incQuestionNumber: () => void
  setQuestionsAmount: Dispatch<SetStateAction<number>>
  answers: QuestionResponse[]
  addAnswer: (response: QuestionResponse) => void
  isLastQuestion: boolean
  setSurveyStatus: Dispatch<SetStateAction<SurveyStatus>>
  surveyDone: boolean
  surveyReadyForStart: boolean
  surveyInProgress: boolean
  setSurveyId: Dispatch<SetStateAction<number>>
}

export const SurveyQuizContext = createContext<
  SurveyQuizContextType | undefined
>(undefined)

export function SurveyQuizProvider({ children }: { children: ReactNode }) {
  const [surveyId, setSurveyId] = useState(0)
  const [surveyStatus, setSurveyStatus] = useState<SurveyStatus>('ready')
  const [questionNumber, setQuestionNumber] = useState(0)
  const [questionsAmount, setQuestionsAmount] = useState(0)
  const [answers, setAnswers] = useState<QuestionResponse[]>([])
  const isLastQuestion = questionNumber === questionsAmount - 1
  const surveyReadyForStart = surveyStatus === 'ready'
  const surveyInProgress = surveyStatus === 'in-progress'
  const surveyDone = surveyStatus === 'done'

  const incQuestionNumber = useCallback(() => {
    setQuestionNumber((prevPage) => {
      if (prevPage < questionsAmount - 1) {
        return prevPage + 1
      }
      return prevPage
    })
  }, [questionsAmount])

  const addAnswer = (answer: QuestionResponse) => {
    const newAnswer = [...answers, answer]
    setAnswers(newAnswer)
  }

  return (
    <SurveyQuizContext.Provider
      value={{
        addAnswer,
        answers,
        incQuestionNumber,
        isLastQuestion,
        questionNumber,
        setQuestionsAmount,
        setSurveyId,
        setSurveyStatus,
        surveyDone,
        surveyId,
        surveyInProgress,
        surveyReadyForStart
      }}
    >
      {children}
    </SurveyQuizContext.Provider>
  )
}
