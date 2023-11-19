import { SurveyQuestionsContext } from '@contexts/survey-questions'
import { useContext } from 'react'

export function useQuestionsContext() {
  const questionContext = useContext(SurveyQuestionsContext)

  if (!questionContext)
    throw new Error('useQuestionsContext should be used with provider')

  return questionContext
}
