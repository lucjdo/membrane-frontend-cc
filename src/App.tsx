import { AccountContextProvider } from '@context/account'
import Survey from '@containers/survey'
import './App.css'

function App() {
  return (
    <AccountContextProvider>
      <Survey />
    </AccountContextProvider>
  )
}

export default App
