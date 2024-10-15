import './App.css'
import { useQuery } from '@tanstack/react-query'
import { getCurrency, getTables, queryKeys } from './api/queries'

function App() {  

  const { data: tableData, refetch } = useQuery({
    queryKey: [queryKeys.Tables],
    queryFn: getTables,
    select(data) {
      return data[0]
    },
  })
  const { data: currencyData } = useQuery({
    queryKey: [queryKeys.Currency],
    queryFn: getCurrency
  })

  const currenciesData = tableData?.rates
  console.log('table',tableData)
  console.log('chf',currencyData)

  return (
    <>
      <h1>Kursy walut</h1>
      <div className="card">
        <button onClick={() => refetch()}>
          refetch
        </button>
      </div>
      <div className='currencies-column'>
        {currenciesData?.map((item, index) => (
          <div key={index} className='currencies-row'>
            <p key={`code${index}`}>{item.code}</p>
            <p key={`mid${index}`}>{item.mid}</p>
          </div>
          ))}
      </div>
    </>
  )
}

export default App
