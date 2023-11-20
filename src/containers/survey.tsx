import { Stack } from '@mui/material'
import SurveyHeader from './survey-header'
import SurveyQuiz from './survey-quiz'
import { useAccount } from '@hooks/useAccount'
import { SurveyQuizProvider } from '@contexts/survey-quiz'
import ErrorBoundary from './error-boundary'
import { useCheckGoerliNetwork } from '@hooks/useCheckGoerliNetwork'

export default function Survey() {
  const { connected } = useAccount()
  const { isGoerliNetwork } = useCheckGoerliNetwork()
  const surveyAvailable = connected && isGoerliNetwork

  return (
    <SurveyQuizProvider>
      <Stack gap={3}>
        <SurveyHeader />
        <ErrorBoundary fallback='Looks like something didn’t go as planned with the survey. Let’s try that again!'>
          {surveyAvailable && <SurveyQuiz />}
        </ErrorBoundary>
      </Stack>
    </SurveyQuizProvider>
  )
}
