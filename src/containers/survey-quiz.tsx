import { Stack, Typography } from '@mui/material'
import SURVEY_EXAMPLE from '../utils/survey-example.json'
import { useEffect } from 'react'
import { useQuestionsContext } from '@hooks/useQuestionsContext'
import FormStep from './form-step'
import QuizInitial from './quiz-initial'
import SurveyOverview from './survey-overview'

export default function SurveyQuiz() {
  const {
    setQuestionsAmount,
    questionNumber,
    surveyReadyForStart,
    surveyDone,
    surveyInProgress
  } = useQuestionsContext()
  const surveyTitle = SURVEY_EXAMPLE.title
  const initialImageUrl = SURVEY_EXAMPLE.image
  const questions = SURVEY_EXAMPLE.questions
  const questionsAmount = questions.length
  const question = questions[questionNumber]

  useEffect(() => {
    setQuestionsAmount(questionsAmount)
  }, [questionsAmount, setQuestionsAmount])

  return (
    <Stack className='space' sx={{}}>
      <Typography
        variant='h5'
        sx={{ fontFamily: 'Smooch Sans', fontSize: '4rem' }}
      >
        {surveyTitle.toUpperCase()}
      </Typography>
      <Stack sx={{ alignItems: 'center', gap: 2 }}>
        {surveyReadyForStart && (
          <QuizInitial initialImageUrl={initialImageUrl} />
        )}
        {surveyInProgress && (
          <FormStep key={question.text} question={question} />
        )}
        {surveyDone && <SurveyOverview />}
      </Stack>
    </Stack>
  )
}
