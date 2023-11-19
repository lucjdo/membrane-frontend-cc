// FeedbackContext.tsx
import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect
} from 'react'

interface SurveyQuestionsContextType {}

export const SurveyQuestionsContext = createContext<
  SurveyQuestionsContextType | undefined
>(undefined)

export function SurveyQuestionsProvider({ children }: { children: ReactNode }) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [questionsAmount, setQuestionsAmount] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState({ lifetime: 10000 })

  console.log(questionNumber)

  const incQuestionNumber = useCallback(() => {
    setQuestionNumber((prevPage) => {
      if (prevPage < questionsAmount - 1) {
        return prevPage + 1
      }
      return prevPage
    })
  }, [questionsAmount])

  useEffect(() => {
    const timeout = setTimeout(() => {
      incQuestionNumber()
    }, currentQuestion.lifetime)

    return () => clearTimeout(timeout)
  }, [currentQuestion, questionNumber, incQuestionNumber])

  return (
    <SurveyQuestionsContext.Provider
      value={{
        questionNumber,
        incQuestionNumber,
        setQuestionsAmount,
        setCurrentQuestion
      }}
    >
      {children}
    </SurveyQuestionsContext.Provider>
  )
}
