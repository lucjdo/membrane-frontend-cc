import { Box, Typography } from '@mui/material'
import MetamaskConnect from './metamask-connect'

export default function SurveyHeader() {
  return (
    <Box>
      <Typography variant='h3'>Welcome to Membrane Survey</Typography>
      <Typography variant='subtitle1' mb={1}>
        Get ready to participate in engaging quizzes and surveys while earning
        exciting tokens as a reward for your valuable input! 🚀
      </Typography>
      <MetamaskConnect />
    </Box>
  )
}
