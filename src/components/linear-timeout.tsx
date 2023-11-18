import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export default function LinearTimeout({ time = 7000 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const timer = setInterval(() => {
      const now = performance.now()
      const deltaTime = now - start
      const newProgress = (deltaTime / time) * 100

      setProgress(newProgress >= 100 ? 100 : newProgress)

      if (newProgress >= 100) {
        clearInterval(timer)
      }
    }, 10)

    return () => {
      clearInterval(timer)
    }
  }, [time])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={progress} />
    </Box>
  )
}
