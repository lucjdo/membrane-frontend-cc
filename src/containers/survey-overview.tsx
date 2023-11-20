import { useOnGetReward } from '@hooks/useOnGetReward'
import { useQuizContext } from '@hooks/useQuizContext'
import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { toast } from 'sonner'

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
        <Typography
          variant='h5'
          sx={{ fontFamily: 'Smooch Sans', fontSize: '3rem' }}
        >
          Thanks for participating!
        </Typography>
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
        <Button
          variant='contained'
          color='success'
          sx={{
            fontFamily: 'Smooch Sans',
            fontSize: '1.4rem',
            fontWeight: 700,
            padding: '0rem 2rem'
          }}
          onClick={handleOnGetReward}
        >
          Get Reward!
        </Button>
      )}
    </Stack>
  )
}
