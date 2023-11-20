import { toast } from 'sonner'
import { CustomError } from 'types'

export function showCustomError(error: unknown) {
  const customError = error as CustomError
  if (customError && customError.message) {
    toast.error(customError.message)
  } else {
    toast.error('An unknown error occurred')
  }
}
