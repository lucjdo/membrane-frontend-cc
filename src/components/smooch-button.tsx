import { Button, ButtonProps } from '@mui/material'

interface SmoochButtonProps extends Omit<ButtonProps, 'variant'> {}

export default function SmoochButton(props: SmoochButtonProps) {
  return (
    <Button
      {...props}
      variant='contained'
      sx={{
        fontFamily: 'Smooch Sans',
        fontSize: '1.4rem',
        fontWeight: 700,
        padding: '0rem 2rem'
      }}
    >
      {props.children}
    </Button>
  )
}
