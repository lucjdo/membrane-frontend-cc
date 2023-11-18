import { getChainId } from '@services/metamask/getChainId'
import { useQuery } from 'react-query'

export function useChainId() {
  const { data: chainId, isLoading } = useQuery('chain-id', getChainId)

  return { chainId, isLoading }
}
