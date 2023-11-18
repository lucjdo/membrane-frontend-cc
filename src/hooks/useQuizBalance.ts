import { getQuizBalance } from '@services/contracts/getQuizBalance'
import { useQuery } from 'react-query'

export function useQuizBalance() {
  const { data: balance, isLoading } = useQuery('quiz-balance', getQuizBalance)
  return { balance: Number(balance), isLoading }
}
