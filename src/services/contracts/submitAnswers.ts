import { QUIZ_ABI } from '@services/utils/abis/quiz'
import { QUIZ_CONTRACT_ADDRESS } from '@services/utils/addresses'
import { ethers } from 'ethers'

export async function submitAnswers(surveyId: number, answersIds: number[]) {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(
      QUIZ_CONTRACT_ADDRESS,
      QUIZ_ABI,
      signer
    )
    const transaction = await contract.submit(surveyId, answersIds)
    await transaction.wait()
    console.log('Transaction successful!')
  } catch (error) {
    console.error('Error submitting to the contract:', error)
  }
}
