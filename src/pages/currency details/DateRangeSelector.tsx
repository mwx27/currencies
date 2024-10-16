import { useState } from 'react'
import { DateSelector } from './DateSelector'
import './styles/DateRangeSelector.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { DEFAULT_VALUES } from '../../constants'
import { DatesRange } from '../../types'

type Props = {
  onChange: (value: DatesRange) => void
}

export const DateRangeSelector: React.FC<Props> = ({ onChange }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const datesRange: DatesRange = {
    startDate,
    endDate
  }

  const onStartDatePick = (value: string) => {
    setStartDate(value)
    onChange({ ...datesRange, startDate: value })
  }

  const onEndDatePick = (value: string) => {
    setEndDate(value)
    onChange({ ...datesRange, endDate: value })
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <h2>Select dates range</h2>
        <div className="date-range-selector">
          <DateSelector
            onChange={value => onStartDatePick(value)}
            defaultDate={dayjs(DEFAULT_VALUES.startDate)}
            isStart
          />
          <DateSelector
            onChange={value => onEndDatePick(value)}
            defaultDate={dayjs(DEFAULT_VALUES.endDate)}
          />
        </div>
      </div>
    </LocalizationProvider>
  )
}
