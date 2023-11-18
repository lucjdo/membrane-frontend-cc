import { useSDK } from '@metamask/sdk-react'
import { useEffect, useState } from 'react'
import { useAccount } from './useAccount'

export function useMMConnect() {
  const [account, setAccount] = useState<string>()
  const { setAccount: setContextAccount } = useAccount()
  const { sdk, connected, connecting, chainId } = useSDK()

  useEffect(() => {
    setContextAccount({ accountId: account, chainId, connected })
  }, [account, chainId, connected, setContextAccount])

  const connect = async () => {
    try {
      const accounts = await sdk?.connect()
      // @ts-expect-error MetaMasks docs
      setAccount(accounts?.[0])
    } catch (err) {
      console.warn(`failed to connect..`, err)
    }
  }

  return { account, connected, connecting, chainId, connect }
}
