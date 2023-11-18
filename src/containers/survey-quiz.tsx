import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material'
import SURVEY_EXAMPLE from '../utils/survey-example.json'
import { useCallback, useEffect, useId, useState } from 'react'
import LinearTimeout from '@components/linear-timeout'

export default function SurveyQuiz() {
  const quizFormId = useId()
  const [questionNumber, setQuestionNumber] = useState(0)
  const surveyTitle = SURVEY_EXAMPLE.title
  const questions = SURVEY_EXAMPLE.questions
  const questionsAmount = questions.length
  const question = questions[questionNumber].text
  const lifetime = questions[questionNumber].lifetimeSeconds * 1000
  const image = questions[questionNumber].image
  const options = questions[questionNumber].options

  const incQuestionNumber = useCallback(() => {
    setQuestionNumber((prevPage) => {
      if (prevPage < questionsAmount - 1) {
        return prevPage + 1
      }
      return prevPage
    })
  }, [questionsAmount])

  useEffect(() => {
    const timeout = setTimeout(() => {
      incQuestionNumber()
    }, lifetime)

    return () => clearTimeout(timeout)
  }, [lifetime, questionNumber, incQuestionNumber])

  const handleOnNextClick = () => {
    incQuestionNumber()
  }

  return (
    <Stack
      sx={{ border: '1px solid #fff', borderRadius: '0.7rem', p: 3, gap: 2 }}
    >
      <Typography variant='h4'>{surveyTitle}</Typography>
      <Stack sx={{ background: 'white', alignItems: 'center', p: 2, gap: 2 }}>
        <FormControl sx={{ gap: 1 }}>
          <FormLabel id={quizFormId}>{question}</FormLabel>
          <img
            src={`${image}?fit=crop&auto=format`}
            alt={`${question} image`}
            loading='lazy'
          />
          <RadioGroup aria-labelledby={quizFormId} name='options-group'>
            {options.map((option) => (
              <FormControlLabel
                key={option.text}
                sx={{ color: 'black' }}
                value={option.text}
                control={<Radio />}
                label={option.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <LinearTimeout key={questionNumber} time={lifetime} />
        <Button onClick={handleOnNextClick}>Next Question</Button>
      </Stack>
    </Stack>
  )
}
