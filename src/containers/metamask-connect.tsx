import AccountInfo from '@components/account-info'
import { useCheckGoerliNetwork } from '@hooks/useCheckGoerliNetwork'
import { useAccount } from '@hooks/useAccount'
import { Button, Stack, Typography } from '@mui/material'
import { switchToGoerliNetwork } from '@services/metamask/switchToGoerliNetwork'
import { connectToMetamask } from '@services/metamask/connectToMetamask'
import { useQuizBalance } from '@hooks/useQuizBalance'

export default function MetamaskConnect() {
  const { isGoerliNetwork } = useCheckGoerliNetwork()
  const { connected } = useAccount()
  const { balance } = useQuizBalance()

  const handleOnSwitchNetwork = () => {
    switchToGoerliNetwork()
  }

  const handleOnConnect = () => {
    connectToMetamask()
  }

  return (
    <>
      {connected ? (
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
            <AccountInfo
              connected={connected}
              network='Goerli'
              balance={balance || 0}
            />
          )}
        </>
      ) : (
        <Button variant='contained' onClick={handleOnConnect}>
          Connect with Metamask
        </Button>
      )}
    </>
  )
}
