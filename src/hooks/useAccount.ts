import { getAccounts } from '@services/metamask/getAccount'
import { useQuery } from 'react-query'

export function useAccount() {
  const { data, isLoading } = useQuery<string[]>('accounts', getAccounts)
  const account = data?.[0]
  const connected = !!account

  return { account, connected, isLoading }
}
