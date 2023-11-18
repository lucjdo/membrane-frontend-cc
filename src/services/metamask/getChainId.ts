import { ethers } from 'ethers'

export async function getChainId() {
  try {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const network = await provider.getNetwork()
      return network.chainId
    } else {
      alert('Install metamask extension!')
    }
  } catch (error) {
    console.error(error)
  }
}
