import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffeesProvider } from './contexts/CoffeesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
