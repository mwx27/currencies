import { Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Currencies, CurrencyDetails } from './pages'

export const App: React.FC = () => {
  const queryClient = new QueryClient()

  const transitionValue = 'all 0.2s ease-in-out'

  const materialTheme = createTheme({
    palette: {
      text: {
        primary: '#fff',
        secondary: '#fff'
      }
    },
    components: {
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            color: 'gray',
            '& .MuiSvgIcon-root': {
              color: 'gray',
              transition: transitionValue
            },
            '&:hover .MuiSvgIcon-root': {
              color: 'white'
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray',
              transition: transitionValue
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green'
            },
            '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray'
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'white',
            '&.Mui-disabled': {
              color: 'white'
            }
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&.Mui-disabled': {
              '-webkit-text-fill-color': 'white'
            }
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={materialTheme}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={<Currencies />}
          />
          <Route
            path="/currency/:code"
            element={<CurrencyDetails />}
          />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
