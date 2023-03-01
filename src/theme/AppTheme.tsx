import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./purple"

interface IAppTheme {
  children: JSX.Element;
}

export const AppTheme = ( {children}:IAppTheme) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
