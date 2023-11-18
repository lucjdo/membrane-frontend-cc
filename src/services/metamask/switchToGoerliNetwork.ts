export async function switchToGoerliNetwork() {
  await window.ethereum?.request({
    method: 'wallet_switchEthereumChain',
    params: [
      {
        chainId: '0x5'
      }
    ]
  })
}
