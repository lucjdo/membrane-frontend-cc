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
        sx={{
          fontFamily: 'Smooch Sans',
          fontSize: '1.4rem',
          padding: '0rem 2rem',
          fontWeight: 700
        }}
      >
        Start Survey
      </Button>
    </Stack>
  )
}
