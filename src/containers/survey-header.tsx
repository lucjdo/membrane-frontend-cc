import { Box, Typography } from '@mui/material'
import MetamaskConnect from './metamask-connect'
import { useQuizContext } from '@hooks/useQuizContext'
import WelcomeTitle from '@components/welcome-title'

export default function SurveyHeader() {
  const { surveyReadyForStart } = useQuizContext()
  return (
    <Box>
      {surveyReadyForStart && (
        <>
          <WelcomeTitle>Welcome to Membrane Survey</WelcomeTitle>
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
