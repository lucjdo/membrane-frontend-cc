import { Stack } from '@mui/material'
import SurveyWelcome from './survey-header'
import SurveyQuiz from './survey-quiz'
import { useAccount } from '@hooks/useAccount'
import { SurveyQuestionsProvider } from '@contexts/survey-questions'

export default function Survey() {
  const { connected } = useAccount()
  return (
    <Stack gap={3}>
      <SurveyWelcome />
      <SurveyQuestionsProvider>
        {connected && <SurveyQuiz />}
      </SurveyQuestionsProvider>
    </Stack>
  )
}
