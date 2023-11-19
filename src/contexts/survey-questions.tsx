// FeedbackContext.tsx
import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  Dispatch
} from 'react'

interface SurveyQuestionsContextType {
  questionNumber: number
  incQuestionNumber: () => void
  setQuestionsAmount: Dispatch<React.SetStateAction<number>>
}

export const SurveyQuestionsContext = createContext<
  SurveyQuestionsContextType | undefined
>(undefined)

export function SurveyQuestionsProvider({ children }: { children: ReactNode }) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [questionsAmount, setQuestionsAmount] = useState(0)

  const incQuestionNumber = useCallback(() => {
    setQuestionNumber((prevPage) => {
      if (prevPage < questionsAmount - 1) {
        return prevPage + 1
      }
      return prevPage
    })
  }, [questionsAmount])

  return (
    <SurveyQuestionsContext.Provider
      value={{
        questionNumber,
        incQuestionNumber,
        setQuestionsAmount
      }}
    >
      {children}
    </SurveyQuestionsContext.Provider>
  )
}
