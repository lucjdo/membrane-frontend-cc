import { useSDK } from '@metamask/sdk-react'
import { useState } from 'react'

export function useMMConnect() {
  const [account, setAccount] = useState<string>()
  const { sdk, connected, connecting, chainId } = useSDK()

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
