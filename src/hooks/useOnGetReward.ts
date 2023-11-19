import { useQueryClient } from 'react-query'
import { submitAnswers } from '@services/contracts/submitAnswers'
import { useQuestionsContext } from './useQuestionsContext'

export function useOnGetReward() {
  const queryClient = useQueryClient()
  const { answers, surveyId } = useQuestionsContext()
  const validAnswers = answers.filter((answer) => answer?.answer?.text)
  const answersIds = validAnswers.map((answer) => Number(answer.answer?.id))

  const onGetReward = async () => {
    await submitAnswers(surveyId, answersIds)
    queryClient.invalidateQueries({ queryKey: ['quiz-balance'] })
  }

  return { onGetReward }
}