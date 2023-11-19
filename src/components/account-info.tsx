import { Stack, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

interface AccountInfoProps {
  connected: boolean
  network: string
  balance: number
}

export default function AccountInfo({
  connected,
  network,
  balance
}: AccountInfoProps) {
  return (
    <Stack
      direction='row'
      gap={2}
      justifyContent='space-around'
      sx={{
        p: 0.5,
        borderRadius: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      <Stack direction='row' gap={0.5} alignItems='center'>
        <Typography>Connection:</Typography>
        <CircleIcon color={connected ? 'success' : 'error'} fontSize='small' />
      </Stack>
      <Stack direction='row' gap={0.5}>
        <Typography>Network:</Typography>
        <Typography>{network}</Typography>
      </Stack>
      <Stack direction='row' gap={0.5}>
        <Typography>$QUIZ Balance:</Typography>
        <Typography>{balance}</Typography>
      </Stack>
    </Stack>
  )
}
