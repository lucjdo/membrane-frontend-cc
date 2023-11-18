import { useEffect, useState } from 'react'
import { useChainId } from './useChainId'

export function useCheckGoerliNetwork() {
  const [isGoerliNetwork, setIsGoerliNetwork] = useState(false)
  const { chainId } = useChainId()

  useEffect(() => {
    if (chainId === BigInt(5n)) return setIsGoerliNetwork(true)
    setIsGoerliNetwork(false)
  }, [chainId])

  return { isGoerliNetwork }
}
