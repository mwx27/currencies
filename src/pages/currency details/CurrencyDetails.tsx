import { useParams } from 'react-router-dom'
import { getFlagEmoji } from '../../utils'
import { Line } from 'react-chartjs-2'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { useQuery } from '@tanstack/react-query'
import { getCurrency, queryKeys } from '../../api/queries'

export const CurrencyDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>()

  if (!code) {
    return (
      <div>
        <h1>{'Invalid currency code :('}</h1>
      </div>
    )
  }

  const { data: currencyData } = useQuery({
    queryKey: [queryKeys.Currency, code],
    queryFn: () => getCurrency(code),
    select(data) {
      const rates = data?.rates
      const dates = rates.map(rate => rate.effectiveDate)
      const values = rates.map(rate => rate.mid)

      return {
        dates,
        values
      }
    }
  })

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const lineChartData = {
    labels: currencyData?.dates,
    datasets: [
      {
        label: 'Currency Value',
        data: currencyData?.values,
        fill: false,
        backgroundColor: '#49e61051',
        borderColor: '#49e61051'
      }
    ]
  }

  return (
    <div>
      <h1>
        {`CurrencyDetails of ${code}`} {code && getFlagEmoji(code)}
      </h1>
      <Line data={lineChartData} />
    </div>
  )
}
