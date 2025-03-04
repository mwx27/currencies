import { useQuery } from '@tanstack/react-query'
import { getTables, QueryKeys } from '../../api/queries'
import { CurrencyItem } from './CurrencyItem'
import './styles.css'

export const Currencies: React.FC = () => {
  const { data: tableData } = useQuery({
    queryKey: [QueryKeys.Tables],
    queryFn: getTables,
    select(data) {
      return data[0]
    }
  })

  const currenciesData = tableData?.rates.filter(item => item.code !== 'XDR')

  return (
    <>
      <h1>Kursy walut</h1>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/mwx27/currencies/blob/main/README.md"
      >
        About this page...
      </a>
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
