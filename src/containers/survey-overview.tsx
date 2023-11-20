import { useOnGetReward } from '@hooks/useOnGetReward'
import { useQuestionsContext } from '@hooks/useQuestionsContext'
import { Button, Stack, Typography } from '@mui/material'

export default function SurveyOverview() {
  const { answers } = useQuestionsContext()
  const { onGetReward, error, isError } = useOnGetReward()

  const handleOnGetReward = () => {
    onGetReward()
  }

  return (
    <Stack alignItems='center' gap={2} pb={3}>
      <Stack>
        <Typography variant='h5'>Thanks for participating!</Typography>
        <Typography variant='h5'>
          Let's take a peek at your survey overview
        </Typography>
      </Stack>
      <Stack gap={2}>
        {answers.map((question) => (
          <Stack key={question?.question}>
            <Typography fontSize='1.3rem' color='#1976d2'>
              - {question?.question}
            </Typography>
            <Typography fontSize='1.2rem'>
              + {question?.answer?.text || 'No response'}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Button variant='contained' color='error' onClick={handleOnGetReward}>
        Get Reward!
      </Button>
    </Stack>
  )
}
