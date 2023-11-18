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
      sx={{ border: '1px solid #fff', borderRadius: '1rem', p: 1 }}
    >
      <Stack direction='row' gap={0.5} alignItems='center'>
        <Typography fontWeight={600}>Connection:</Typography>
        <CircleIcon color={connected ? 'success' : 'error'} fontSize='small' />
      </Stack>
      <Stack direction='row' gap={0.5}>
        <Typography fontWeight={600}>Network:</Typography>
        <Typography>{network}</Typography>
      </Stack>
      <Stack direction='row' gap={0.5}>
        <Typography fontWeight={600}>$QUIZ Balance:</Typography>
        <Typography>{balance}</Typography>
      </Stack>
    </Stack>
  )
}
