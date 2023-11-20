import { Typography, TypographyProps } from '@mui/material'

interface SmoochTitleProps extends TypographyProps {}

export default function SmoochTitle(props: SmoochTitleProps) {
  return (
    <Typography
      variant='h5'
      sx={{ fontFamily: 'Smooch Sans', fontSize: '3rem' }}
      {...props}
    >
      {props.children}
    </Typography>
  )
}
