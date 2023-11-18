import { useEffect, useState } from 'react'
import { useMMConnect } from './useMMConnect'

export function useCheckGoerliNetwork() {
  const { chainId } = useMMConnect()
  const [isGoerliNetwork, setIsGoerliNetwork] = useState(false)

  useEffect(() => {
    if (chainId === '0x5') return setIsGoerliNetwork(true)
    setIsGoerliNetwork(false)
  }, [chainId])

  return { isGoerliNetwork }
}
