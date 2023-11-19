import { Box } from '@mui/material'

interface ResponsiveImageProps {
  imageUrl: string
}

export default function ResponsiveImage({ imageUrl }: ResponsiveImageProps) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto',
        '> img': { maxWidth: '100%', height: 'auto', display: 'block' }
      }}
    >
      <img src={`${imageUrl}?fit=crop&auto=format`} />
    </Box>
  )
}
