import LinearTimeout from '@components/linear-timeout'
import ResponsiveImage from '@components/responsive-image'
import { useQuizContext } from '@hooks/useQuizContext'
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
  answerId: string
}

export default function FormStep({ question }: FormStepProps) {
  const formId = useId()
  const { register, handleSubmit, watch } = useForm<FormValues>()
  const lifetime = question.lifetimeSeconds * 1000
  const { incQuestionNumber, addAnswer, isLastQuestion, setSurveyStatus } =
    useQuizContext()
  const answerOptions = question?.options
  const answer = watch('answerId')
  console.log(answer)
  const questionText = question.text

  useEffect(() => {
    const timeout = setTimeout(() => {
      const answerResponse = {
        question: questionText,
        answer: undefined
      }
      addAnswer(answerResponse)
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
        const answerResponse = answerOptions.find(
          (ans) => ans.id === data.answerId
        )!
        const response = {
          question: questionText,
          answer: answerResponse
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
          borderRadius: '0.5rem',
          display: 'flex',
          maxWidth: '500px'
        }}
      >
        <FormLabel id={formId}>{question.text}</FormLabel>
        <ResponsiveImage imageUrl={question.image} />
        <RadioGroup aria-labelledby={formId} name='options-group'>
          {answerOptions.map((option) => (
            <FormControlLabel
              key={option.text}
              sx={{ color: 'black', textAlign: 'left' }}
              value={option.id}
              control={<Radio />}
              label={option.text}
              {...register('answerId')}
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
