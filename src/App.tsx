import { MetaMaskProvider } from '@metamask/sdk-react'
import { AccountContextProvider } from '@context/account'
import { Stack } from '@mui/material'
import SurveyWelcome from '@containers/survey-welcome'
import './App.css'

function App() {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: 'Membrane Survey App',
          url: window.location.host
        }
      }}
    >
      <AccountContextProvider>
        <Stack>
          <SurveyWelcome />
        </Stack>
      </AccountContextProvider>
    </MetaMaskProvider>
  )
}

export default App
