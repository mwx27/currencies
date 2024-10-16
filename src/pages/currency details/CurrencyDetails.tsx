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
import { getCurrencyInRange, queryKeys } from '../../api/queries'
import { useState } from 'react'
import { DateRangeSelector } from './DateRangeSelector'
import './styles/CurrencyDetails.css'
import { DEFAULT_VALUES } from '../../constants'
import { DatesRange } from '../../types'
import { Calculator } from './Calculator'

export const CurrencyDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>()
  const currencyCode = code as string

  const [datesRange, setDatesRange] = useState<DatesRange>({
    endDate: DEFAULT_VALUES.endDate,
    startDate: DEFAULT_VALUES.startDate
  })
  console.log('wybrana data', datesRange)

  const { data: currencyData } = useQuery({
    queryKey: [
      queryKeys.Currency,
      code,
      datesRange.startDate,
      datesRange.endDate
    ],
    enabled: !!code,
    queryFn: () =>
      getCurrencyInRange(
        currencyCode,
        datesRange.startDate,
        datesRange.endDate
      ),
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
        {`Currency Details of ${currencyCode}`} {getFlagEmoji(currencyCode)}
      </h1>
      <Line data={lineChartData} />
      <DateRangeSelector onChange={value => setDatesRange(value)} />
      <Calculator
        targetCurrency={currencyCode}
        rate={0}
      />
    </div>
  )
}
