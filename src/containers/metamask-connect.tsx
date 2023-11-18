import AccountInfo from '@components/account-info'
import { useCheckGoerliNetwork } from '@hooks/useCheckGoerliNetwork'
import { useMMConnect } from '@hooks/useMMConnect'
import { Button, Stack, Typography } from '@mui/material'
import { switchToGoerliNetwork } from '@services/metamask/switchToGoerliNetwork'
import { AccountContext } from '../context/account'
import { useContext } from 'react'

export default function MetamaskConnect() {
  const { connect } = useMMConnect()
  const { isGoerliNetwork } = useCheckGoerliNetwork()
  const accountContext = useContext(AccountContext)

  const handleOnSwitchNetwork = () => {
    switchToGoerliNetwork()
  }

  return (
    <>
      {accountContext?.account.connected ? (
        <>
          {!isGoerliNetwork ? (
            <Stack sx={{ alignItems: 'center' }}>
              <Typography>
                Oops! It seems you're not connected to the Goerli network.
              </Typography>
              <Typography mb={1}>
                To successfully complete the survey and earn your well-deserved
                rewards, let's make sure you're connected to the Goerli network
                on your MetaMask extension.
              </Typography>
              <Button variant='contained' onClick={handleOnSwitchNetwork}>
                Switch to Goerli
              </Button>
            </Stack>
          ) : (
            <AccountInfo />
          )}
        </>
      ) : (
        <Button variant='contained' onClick={connect}>
          Connect with Metamask
        </Button>
      )}
    </>
  )
}
