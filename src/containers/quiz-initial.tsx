import ResponsiveImage from '@components/responsive-image'
import { useQuizContext } from '@hooks/useQuizContext'
import { Button, Stack } from '@mui/material'

interface QuizInitialProps {
  initialImageUrl: string
}

export default function QuizInitial({ initialImageUrl }: QuizInitialProps) {
  const { setSurveyStatus } = useQuizContext()
  return (
    <Stack gap={1}>
      <ResponsiveImage imageUrl={initialImageUrl} />
      <Button
        variant='contained'
        onClick={() => setSurveyStatus('in-progress')}
      >
        Start Survey
      </Button>
    </Stack>
  )
}
