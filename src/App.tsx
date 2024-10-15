import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Currencies, CurrencyDetails } from './pages'
import { Route, Routes } from 'react-router-dom'

export const App: React.FC = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={<Currencies />}
        />
        <Route
          path="/dupa"
          element={<CurrencyDetails />}
        />
      </Routes>
    </QueryClientProvider>
  )
}
