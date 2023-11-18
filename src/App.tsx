import { MetaMaskProvider } from '@metamask/sdk-react'
import { AccountContextProvider } from '@context/account'
import Survey from '@containers/survey'
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
        <Survey />
      </AccountContextProvider>
    </MetaMaskProvider>
  )
}

export default App
