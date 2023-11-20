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
        <Typography variant='subtitle2'>Connection:</Typography>
        <CircleIcon color={connected ? 'success' : 'error'} fontSize='small' />
      </Stack>
      <Stack direction='row' gap={0.5}>
        <Typography variant='subtitle2'>Network:</Typography>
        <Typography variant='subtitle2'>{network}</Typography>
      </Stack>
      <Stack direction='row' gap={0.5}>
        <Typography variant='subtitle2'>$QUIZ Balance:</Typography>
        <Typography variant='subtitle2'>{balance}</Typography>
      </Stack>
    </Stack>
  )
}
