import { QUIZ_ABI } from '@services/utils/abis/quiz'
import { QUIZ_CONTRACT_ADDRESS } from '@services/utils/addresses'
import { TransactionReceipt, ethers } from 'ethers'

export async function submitAnswers(
  surveyId: number,
  answersIds: number[]
): Promise<TransactionReceipt> {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(
      QUIZ_CONTRACT_ADDRESS,
      QUIZ_ABI,
      signer
    )
    const transaction = await contract.submit(surveyId, answersIds)
    return await transaction.wait()
  } catch (error) {
    console.error(error)
    throw new Error('Error on submit method')
  }
}
