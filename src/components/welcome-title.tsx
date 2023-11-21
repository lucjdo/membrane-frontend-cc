import { Typography, TypographyProps } from '@mui/material'

interface WelcomeTitleProps extends TypographyProps {}

export default function WelcomeTitle(props: WelcomeTitleProps) {
  return (
    <Typography
      variant='h3'
      sx={{ fontSize: '2.5rem', mb: 1, color: '#1976d2' }}
    >
      {props.children}
    </Typography>
  )
}
