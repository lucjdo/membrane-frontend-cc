import { Stack } from '@mui/material'
import SurveyWelcome from './survey-header'
import SurveyQuiz from './survey-quiz'
import { useAccount } from '@hooks/useAccount'

export default function Survey() {
  const { connected } = useAccount()
  return (
    <Stack gap={3}>
      <SurveyWelcome />
      {connected && <SurveyQuiz />}
    </Stack>
  )
}
