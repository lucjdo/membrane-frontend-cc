export type Account = {
  accountId?: string
  chainId?: bigint
  connected: boolean
}

export interface Survey {
  title: string
  image: string
  questions: Question[]
}

export interface Question {
  text: string
  image: string
  lifetimeSeconds: number
  options: Option[]
}

export interface Option {
  text: string
  id: string
}
