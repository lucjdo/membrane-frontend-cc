import { useOnGetReward } from '@hooks/useOnGetReward'
import { useQuizContext } from '@hooks/useQuizContext'
import { CircularProgress, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { toast } from 'sonner'
import SmoochButton from '../components/smooch-button'
import SmoochTitle from '@components/smooch-title'

export default function SurveyOverview() {
  const { answers, setSurveyStatus } = useQuizContext()
  const { onGetReward, isLoading, isSuccess } = useOnGetReward()

  const handleOnGetReward = () => {
    toast.info('Your reward is in process...')
    onGetReward()
  }

  useEffect(() => {
    if (isSuccess) setSurveyStatus('ready')
  }, [isSuccess, setSurveyStatus])

  return (
    <Stack alignItems='center' gap={2} pb={3}>
      <Stack>
        <SmoochTitle>Thanks for participating!</SmoochTitle>
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
      {isLoading ? (
        <CircularProgress />
      ) : (
        <SmoochButton color='success' onClick={handleOnGetReward}>
          Get Reward!
        </SmoochButton>
      )}
    </Stack>
  )
}
