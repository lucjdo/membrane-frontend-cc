import { useQuestionsContext } from '@hooks/useQuestionsContext'
import { Button, Stack } from '@mui/material'

interface QuizInitialProps {
  initialImageUrl: string
}

export default function QuizInitial({ initialImageUrl }: QuizInitialProps) {
  const { setSurveyStatus } = useQuestionsContext()
  return (
    <Stack>
      <img
        src={`${initialImageUrl}?fit=crop&auto=format`}
        alt='Survey Initial Image'
      />
      <Button
        variant='contained'
        onClick={() => setSurveyStatus('in-progress')}
      >
        Start Survey
      </Button>
    </Stack>
  )
}
