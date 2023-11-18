import { useEffect, useState } from 'react'
import { useAccount } from './useAccount'

export function useMMConnect() {
  const [account, setAccount] = useState<string>('')
  const { setAccount: setContextAccount } = useAccount()

  useEffect(() => {
    setContextAccount({ accountId: account, connected: true })
  }, [account, setContextAccount])

  const connect = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => setAccount(res[0]))
    } else {
      alert('Install metamask extension!!')
    }
  }

  return { account, connect }
}
