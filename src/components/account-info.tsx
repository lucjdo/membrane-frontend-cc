import { Stack, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

export default function AccountInfo() {
  return (
    <Stack direction='row' gap={2}>
      <Stack direction='row' gap={0.5} alignItems='center'>
        <Typography fontWeight={600}>Connection:</Typography>
        <CircleIcon color='success' fontSize='small' />
      </Stack>
      <Stack direction='row' gap={0.5}>
        <Typography fontWeight={600}>Network:</Typography>
        <Typography>Goerli</Typography>
      </Stack>
    </Stack>
  )
}
