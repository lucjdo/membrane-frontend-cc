import { useQuestionsContext } from '@hooks/useQuestionsContext'
import { Button, Stack, Typography } from '@mui/material'

export default function SurveyOverview() {
  const { answers } = useQuestionsContext()
  return (
    <Stack alignItems='center' gap={2}>
      <Typography variant='h5'>
        Let's take a peek at your survey overview!
      </Typography>
      <Stack gap={2}>
        {answers.map((question) => (
          <Stack key={question?.question}>
            <Typography>- {question?.question}</Typography>
            <Typography>+ {question?.answer}</Typography>
          </Stack>
        ))}
      </Stack>
      <Button variant='contained' color='success'>
        Get Reward!
      </Button>
    </Stack>
  )
}
