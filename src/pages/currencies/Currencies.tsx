import { useQuery } from '@tanstack/react-query'

import { getFlagEmoji } from '../../utils'
import { getCurrency, getTables, queryKeys } from '../../api/queries'


export const Currencies: React.FC = () => {

  const { data: tableData } = useQuery({
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


  return(
    <>
          <h1>Kursy walut</h1>
      <div className='currencies-column'>
        {currenciesData?.map((item, index) => (
          <div key={index} className='currencies-row'>
            <p >{getFlagEmoji(item.code)}</p>
            <p key={`code${index}`}>{item.code}</p>
            <p key={`mid${index}`}>{item.mid}</p>
            <p >{`(${item.currency})`}</p>
          </div>
          ))}
      </div>
      </>
  )
}