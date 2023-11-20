import { FormControl, FormControlProps } from '@mui/material'

interface FormWrapperProps extends FormControlProps {}

export default function FormWrapper(props: FormWrapperProps) {
  return (
    <FormControl
      component={'form'}
      sx={{
        gap: 1,
        background: 'white',
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
        display: 'flex',
        maxWidth: '500px'
      }}
    >
      {props.children}
    </FormControl>
  )
}
