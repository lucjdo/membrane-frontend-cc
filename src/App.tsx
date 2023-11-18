import { MetaMaskProvider } from '@metamask/sdk-react'
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
      <Stack>
        <SurveyWelcome />
      </Stack>
    </MetaMaskProvider>
  )
}

export default App
