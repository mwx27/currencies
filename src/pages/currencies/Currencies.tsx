import { useQuery } from '@tanstack/react-query'
import { getTables, queryKeys } from '../../api/queries'
import { CurrencyItem } from './CurrencyItem'
import './styles.css'

export const Currencies: React.FC = () => {
  const { data: tableData } = useQuery({
    queryKey: [queryKeys.Tables],
    queryFn: getTables,
    select(data) {
      return data[0]
    }
  })

  const currenciesData = tableData?.rates

  return (
    <>
      <h1>Kursy walut</h1>

      <table>
        <thead>
          <tr>
            <th scope="col">Nazwa waluty</th>
            <th scope="col">Kurs</th>
          </tr>
        </thead>
        <tbody>
          {currenciesData?.map((item, index) => (
            <CurrencyItem
              key={index}
              code={item.code}
              mid={item.mid}
              currency={item?.currency}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
