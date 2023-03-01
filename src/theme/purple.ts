import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#ff4081',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})
