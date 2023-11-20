import { useMutation, useQueryClient } from 'react-query'
import { submitAnswers } from '@services/contracts/submitAnswers'
import { useQuizContext } from './useQuizContext'
import { toast } from 'sonner'
import { showCustomError } from '../utils/showCustomError'

export function useOnGetReward() {
  const queryClient = useQueryClient()
  const { answers, surveyId } = useQuizContext()
  const validAnswers = answers.filter((answer) => answer?.answer?.text)
  const answersIds = validAnswers.map((answer) => Number(answer.answer?.id))

  const { data, isLoading, isSuccess, isError, mutate, error } = useMutation({
    mutationFn: () => submitAnswers(surveyId, answersIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quiz-balance'] })
      toast.success('Congratulations! You have earned a reward. Well done!')
    },
    onError: (error) => {
      showCustomError(error)
    }
  })

  return { onGetReward: mutate, isLoading, isError, error, data, isSuccess }
}
