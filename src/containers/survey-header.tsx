import { Box, Typography } from '@mui/material'
import MetamaskConnect from './metamask-connect'
import { useQuizContext } from '@hooks/useQuizContext'

export default function SurveyHeader() {
  const { surveyReadyForStart } = useQuizContext()
  return (
    <Box>
      {surveyReadyForStart && (
        <>
          <Typography variant='h3' sx={{ fontSize: '2.5rem', mb: 1 }}>
            Welcome to Membrane Survey
          </Typography>
          <Typography variant='subtitle1' mb={2}>
            Get ready to participate in engaging quizzes and surveys while
            earning exciting tokens as a reward for your valuable input! 🚀
          </Typography>
        </>
      )}
      <MetamaskConnect />
    </Box>
  )
}
