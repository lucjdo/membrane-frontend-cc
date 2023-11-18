export async function connectToMetamask() {
  if (window.ethereum) {
    await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
  } else {
    alert('Install metamask extension!!')
  }
}
