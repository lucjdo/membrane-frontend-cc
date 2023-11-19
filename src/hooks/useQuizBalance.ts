import { getQuizBalance } from '@services/contracts/getQuizBalance'
import { useQuery } from 'react-query'
import { useAccount } from './useAccount'

export function useQuizBalance() {
  const { account } = useAccount()
  const { data: balance, isLoading } = useQuery(['quiz-balance', account], () =>
    getQuizBalance(account!)
  )
  return { balance: Number(balance), isLoading }
}
