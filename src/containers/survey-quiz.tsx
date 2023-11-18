import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material'
import SURVEY_EXAMPLE from '../utils/survey-example.json'
import { useId, useState } from 'react'

export default function SurveyQuiz() {
  const quizFormId = useId()
  const [questionNumber, setQuestionNumber] = useState(0)
  const surveyTitle = SURVEY_EXAMPLE.title
  const questions = SURVEY_EXAMPLE.questions
  const question = questions[questionNumber].text
  const lifetimeSeconds = questions[questionNumber].lifetimeSeconds
  const image = questions[questionNumber].image
  const options = questions[questionNumber].options

  return (
    <Stack
      sx={{ border: '1px solid #fff', borderRadius: '0.7rem', p: 3, gap: 2 }}
    >
      <Typography variant='h4'>{surveyTitle}</Typography>
      <Stack sx={{ background: 'white', alignItems: 'center', p: 2 }}>
        <FormControl sx={{ gap: 1 }}>
          <FormLabel id={quizFormId}>{question}</FormLabel>
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
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
      </Stack>
    </Stack>
  )
}