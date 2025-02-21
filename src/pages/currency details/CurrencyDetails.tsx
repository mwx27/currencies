import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCurrency, getCurrencyInRange, QueryKeys } from '../../api/queries'
import { DEFAULT_RANGE } from '../../constants'
import { DatesRange } from '../../types'
import { getFlagEmoji } from '../../utils'
import { Calculator } from './Calculator'
import { Chart } from './Chart'
import { DateRangeSelector } from './DateRangeSelector'
import './styles/CurrencyDetails.css'

export const CurrencyDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>()
  const currencyCode = code as string

  const [datesRange, setDatesRange] = useState<DatesRange>({ ...DEFAULT_RANGE })

  const { data: currencyData } = useQuery({
    queryKey: [
      QueryKeys.CurrencyRatesInRange,
      code,
      datesRange.startDate,
      datesRange.endDate
    ],
    enabled: !!code,
    queryFn: () => getCurrencyInRange(currencyCode, datesRange),
    select(data) {
      const rates = data?.rates
      const dates = rates.map(rate => rate.effectiveDate)
      const values = rates.map(rate => rate.mid)

      return {
        dates,
        values,
        code: currencyCode
      }
    }
  })

  const { data: currentRate } = useQuery({
    queryKey: [QueryKeys.CurrencyRateNow, code],
    enabled: !!code,
    queryFn: () => getCurrency(currencyCode),
    select(data) {
      const rates = data?.rates
      const rate = rates[0]
      const currencyName = data?.currency

      return {
        rate,
        currencyName
      }
    }
  })

  return (
    <div>
      <header>
        <Link
          to="/"
          className="back-button"
        >
          {'🔙'}
        </Link>
        <h1>{currentRate?.currencyName}</h1>
      </header>
      <h2>
        {currencyCode} {getFlagEmoji(currencyCode)}
      </h2>
      <Chart currencyData={currencyData} />
      <DateRangeSelector onChange={value => setDatesRange(value)} />
      <Calculator
        targetCurrency={currencyCode}
        rate={currentRate?.rate.mid || 0}
      />
    </div>
  )
}
