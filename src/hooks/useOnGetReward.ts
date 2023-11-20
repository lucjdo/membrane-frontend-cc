import { useMutation, useQueryClient } from 'react-query'
import { submitAnswers } from '@services/contracts/submitAnswers'
import { useQuestionsContext } from './useQuestionsContext'

export function useOnGetReward() {
  const queryClient = useQueryClient()
  const { answers, surveyId } = useQuestionsContext()
  const validAnswers = answers.filter((answer) => answer?.answer?.text)
  const answersIds = validAnswers.map((answer) => Number(answer.answer?.id))

  const { data, isLoading, isSuccess, isError, mutate, error } = useMutation({
    mutationFn: () => submitAnswers(surveyId, answersIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quiz-balance'] })
    }
  })

  console.log(data, isLoading, isSuccess, isError, 'error:', error)

  return { onGetReward: mutate, isLoading, isError, error }
}
