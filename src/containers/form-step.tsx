import LinearTimeout from '@components/linear-timeout'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material'
import { useId } from 'react'
import { useForm } from 'react-hook-form'

export default function FormStep({ question }) {
  const formId = useId()
  const { register, handleSubmit } = useForm()
  const lifetime = question.lifetimeSeconds * 1000

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl sx={{ gap: 1 }}>
        <FormLabel id={formId}>{question.text}</FormLabel>
        <img
          src={`${question.image}?fit=crop&auto=format`}
          alt={`${question} image`}
        />
        <RadioGroup aria-labelledby={formId} name='options-group'>
          {question?.options?.map((option) => (
            <FormControlLabel
              {...register('answer')}
              key={option.text}
              sx={{ color: 'black' }}
              value={option.text}
              control={<Radio />}
              label={option.text}
            />
          ))}
        </RadioGroup>
        <LinearTimeout time={lifetime} />
        <Button type='submit'>Next Question</Button>
      </FormControl>
    </form>
  )
}
