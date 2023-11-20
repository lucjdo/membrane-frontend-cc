import { SurveyQuizContext } from '@contexts/survey-quiz'
import { useContext } from 'react'

export function useQuizContext() {
  const quizContext = useContext(SurveyQuizContext)

  if (!quizContext)
    throw new Error('useQuizContext should be used with provider')

  return quizContext
}
