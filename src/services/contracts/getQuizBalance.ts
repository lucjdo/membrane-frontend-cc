import { QUIZ_ABI } from '@services/utils/abis/quiz'
import { QUIZ_CONTRACT_ADDRESS } from '@services/utils/addresses'
import { Contract, ethers, formatUnits } from 'ethers'

export async function getQuizBalance(address: string) {
  try {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const contract = new Contract(QUIZ_CONTRACT_ADDRESS, QUIZ_ABI, provider)
      const balance = await contract.balanceOf(address)
      return formatUnits(balance)
    } else {
      alert('Install metamask extension!')
    }
  } catch (error) {
    console.error(error)
  }
}
