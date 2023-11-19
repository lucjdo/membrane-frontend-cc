import LinearTimeout from '@components/linear-timeout'
import { useQuestionsContext } from '@hooks/useQuestionsContext'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material'
import { useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import { Question } from 'types'

interface FormStepProps {
  question: Question
}

interface FormValues {
  answer: string
}

export default function FormStep({ question }: FormStepProps) {
  const formId = useId()
  const { register, handleSubmit, watch } = useForm<FormValues>()
  const lifetime = question.lifetimeSeconds * 1000
  const { incQuestionNumber, addAnswer, isLastQuestion, setSurveyStatus } =
    useQuestionsContext()
  const answer = watch('answer')
  const questionText = question.text

  useEffect(() => {
    const timeout = setTimeout(() => {
      const response = {
        question: questionText,
        answer
      }
      addAnswer(response)
      if (isLastQuestion) return setSurveyStatus('done')
      incQuestionNumber()
    }, lifetime)

    return () => clearTimeout(timeout)
  }, [
    incQuestionNumber,
    lifetime,
    addAnswer,
    isLastQuestion,
    setSurveyStatus,
    answer,
    questionText
  ])

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const response = {
          question: questionText,
          answer: data.answer
        }
        addAnswer(response)
        if (isLastQuestion) return setSurveyStatus('done')
        incQuestionNumber()
      })}
    >
      <FormControl
        sx={{
          gap: 1,
          background: 'white',
          padding: '1rem 2rem',
          borderRadius: '0.5rem'
        }}
      >
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
        <Button type='submit' disabled={!answer}>
          {isLastQuestion ? 'Finish Survey' : 'Continue'}
        </Button>
      </FormControl>
    </form>
  )
}
