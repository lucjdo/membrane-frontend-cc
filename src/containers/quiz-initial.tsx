import ResponsiveImage from '@components/responsive-image'
import SmoochButton from '@components/smooch-button'
import { useQuizContext } from '@hooks/useQuizContext'
import { Stack } from '@mui/material'

interface QuizInitialProps {
  initialImageUrl: string
}

export default function QuizInitial({ initialImageUrl }: QuizInitialProps) {
  const { setSurveyStatus } = useQuizContext()
  return (
    <Stack gap={1}>
      <ResponsiveImage imageUrl={initialImageUrl} />
      <SmoochButton onClick={() => setSurveyStatus('in-progress')}>
        Start Survey
      </SmoochButton>
    </Stack>
  )
}
