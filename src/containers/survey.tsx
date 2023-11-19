import { Stack } from '@mui/material'
import SurveyHeader from './survey-header'
import SurveyQuiz from './survey-quiz'
import { useAccount } from '@hooks/useAccount'
import { SurveyQuestionsProvider } from '@contexts/survey-questions'

export default function Survey() {
  const { connected } = useAccount()
  return (
    <Stack gap={3}>
      <SurveyQuestionsProvider>
        <SurveyHeader />
        {connected && <SurveyQuiz />}
      </SurveyQuestionsProvider>
    </Stack>
  )
}
