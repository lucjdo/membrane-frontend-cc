import { Box, Typography } from '@mui/material'
import MetamaskConnect from './metamask-connect'
import { useQuestionsContext } from '@hooks/useQuestionsContext'

export default function SurveyHeader() {
  const { surveyReadyForStart } = useQuestionsContext()
  return (
    <Box>
      {surveyReadyForStart && (
        <>
          <Typography variant='h3'>Welcome to Membrane Survey</Typography>
          <Typography variant='subtitle1' mb={1}>
            Get ready to participate in engaging quizzes and surveys while
            earning exciting tokens as a reward for your valuable input! 🚀
          </Typography>
        </>
      )}
      <MetamaskConnect />
    </Box>
  )
}
