import { useContext } from 'react'
import { AccountContext } from '@context/account'

export function useAccount() {
  const accountContext = useContext(AccountContext)

  if (!accountContext)
    throw new Error('useFeedbackContext need to be used on Provicer')

  return accountContext
}
