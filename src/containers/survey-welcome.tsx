import { useMMConnect } from '@hooks/useMMConnect'
import { Box, Typography, Button } from '@mui/material'

export default function SurveyWelcome() {
  const { account, connected, connecting, chainId, connect } = useMMConnect()

  return (
    <Box>
      <Typography variant='h3'>Welcome to Membrane Survey</Typography>
      <Typography variant='subtitle1' mb={1}>
        Get ready to participate in engaging quizzes and surveys while earning
        exciting tokens as a reward for your valuable input! 🚀
      </Typography>

      {connected ? (
        <div>
          <>
            {chainId && `Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      ) : (
        <Button variant='contained' onClick={connect} disabled={connecting}>
          Connect with Metamask
        </Button>
      )}
    </Box>
  )
}
