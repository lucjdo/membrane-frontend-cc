import { useOnGetReward } from '@hooks/useOnGetReward'
import { useQuestionsContext } from '@hooks/useQuestionsContext'
import { Button, Stack, Typography } from '@mui/material'

export default function SurveyOverview() {
  const { answers } = useQuestionsContext()
  const { onGetReward } = useOnGetReward()

  return (
    <Stack alignItems='center' gap={2} pb={3}>
      <Typography variant='h5'>
        Let's take a peek at your survey overview!
      </Typography>
      <Stack gap={2}>
        {answers.map((question) => (
          <Stack key={question?.question}>
            <Typography fontSize='1.3rem' color='#2e7d32'>
              - {question?.question}
            </Typography>
            <Typography fontSize='1.2rem'>
              + {question?.answer?.text || 'No response'}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Button variant='contained' color='success' onClick={onGetReward}>
        Get Reward!
      </Button>
    </Stack>
  )
}
