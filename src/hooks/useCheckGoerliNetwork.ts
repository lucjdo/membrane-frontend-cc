import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '@context/account'

export function useCheckGoerliNetwork() {
  const [isGoerliNetwork, setIsGoerliNetwork] = useState(false)
  const accountContext = useContext(AccountContext)
  const chainId = accountContext?.account.chainId

  useEffect(() => {
    if (chainId === BigInt(5n)) return setIsGoerliNetwork(true)
    setIsGoerliNetwork(false)
  }, [chainId])

  return { isGoerliNetwork }
}
