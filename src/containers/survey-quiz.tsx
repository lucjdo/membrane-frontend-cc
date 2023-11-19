import { Button, Stack, Typography } from '@mui/material'
import SURVEY_EXAMPLE from '../utils/survey-example.json'
import { useEffect } from 'react'
import { useQuestionsContext } from '@hooks/useQuestionsContext'
import FormStep from './form-step'

export default function SurveyQuiz() {
  const {
    setQuestionsAmount,
    questionNumber,
    setSurveyStatus,
    surveyReadyForStart,
    surveyDone,
    surveyInProgress
  } = useQuestionsContext()
  const surveyTitle = SURVEY_EXAMPLE.title
  const questions = SURVEY_EXAMPLE.questions
  const questionsAmount = questions.length
  const question = questions[questionNumber]

  useEffect(() => {
    setQuestionsAmount(questionsAmount)
  }, [questionsAmount, setQuestionsAmount])

  return (
    <Stack
      sx={{ border: '1px solid #fff', borderRadius: '0.7rem', p: 3, gap: 2 }}
    >
      <Typography variant='h4'>{surveyTitle}</Typography>
      <Stack sx={{ background: 'white', alignItems: 'center', p: 2, gap: 2 }}>
        {surveyReadyForStart && (
          <Button
            variant='contained'
            onClick={() => setSurveyStatus('in-progress')}
          >
            Start Survey
          </Button>
        )}
        {surveyInProgress && (
          <FormStep key={question.text} question={question} />
        )}
        {surveyDone && <Typography>Done</Typography>}
      </Stack>
    </Stack>
  )
}
