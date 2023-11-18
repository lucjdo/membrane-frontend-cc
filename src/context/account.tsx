import { Dispatch, ReactNode, createContext, useState } from 'react'

type Account = {
  accountId?: string
  chainId?: string
  connected: boolean
}

type AccountContextType = {
  account: Account
  setAccount: Dispatch<React.SetStateAction<Account>>
}

export const AccountContext = createContext<AccountContextType | undefined>(
  undefined
)

export function AccountContextProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account>({
    accountId: undefined,
    chainId: undefined,
    connected: false
  })

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  )
}
