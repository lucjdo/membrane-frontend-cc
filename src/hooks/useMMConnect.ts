import { ethers } from 'ethers'
import { useAccount } from './useAccount'

export function useMMConnect() {
  const { setAccount: setContextAccount } = useAccount()

  const connect = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      const accountId = accounts[0]
      const provider = new ethers.BrowserProvider(window.ethereum)
      const network = await provider.getNetwork()
      setContextAccount({
        accountId,
        connected: true,
        chainId: network.chainId
      })
    } else {
      alert('Install metamask extension!!')
    }
  }

  return { connect }
}
