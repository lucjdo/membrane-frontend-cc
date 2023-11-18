export async function getAccounts() {
  try {
    if (window.ethereum) {
      return await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
    } else {
      alert('Install metamask extension!!')
    }
  } catch (error) {
    console.error(error)
  }
}
