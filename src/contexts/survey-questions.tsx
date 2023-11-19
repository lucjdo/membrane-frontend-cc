import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  Dispatch,
  SetStateAction
} from 'react'

type SurveyStatus = 'ready' | 'in-progress' | 'done'

interface SurveyQuestionsContextType {
  questionNumber: number
  incQuestionNumber: () => void
  setQuestionsAmount: Dispatch<SetStateAction<number>>
  answers: (string | undefined)[]
  addAnswer: (a: string) => void
  isLastQuestion: boolean
  setSurveyStatus: Dispatch<SetStateAction<SurveyStatus>>
  surveyDone: boolean
  surveyReadyForStart: boolean
  surveyInProgress: boolean
}

export const SurveyQuestionsContext = createContext<
  SurveyQuestionsContextType | undefined
>(undefined)

export function SurveyQuestionsProvider({ children }: { children: ReactNode }) {
  const [surveyStatus, setSurveyStatus] = useState<SurveyStatus>('ready')
  const [questionNumber, setQuestionNumber] = useState(0)
  const [questionsAmount, setQuestionsAmount] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
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

  const addAnswer = (answer: string) => {
    const newAnswer = [...answers, answer]
    setAnswers(newAnswer)
  }

  return (
    <SurveyQuestionsContext.Provider
      value={{
        answers,
        addAnswer,
        questionNumber,
        incQuestionNumber,
        setQuestionsAmount,
        isLastQuestion,
        setSurveyStatus,
        surveyReadyForStart,
        surveyInProgress,
        surveyDone
      }}
    >
      {children}
    </SurveyQuestionsContext.Provider>
  )
}
