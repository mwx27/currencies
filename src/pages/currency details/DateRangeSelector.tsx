import { useState } from 'react'
import { DateSelector } from './DateSelector'
import './styles/DateRangeSelector.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { DEFAULT_RANGE } from '../../constants'
import { DatesRange } from '../../types'

type Props = {
  onChange: (value: DatesRange) => void
}

export const DateRangeSelector: React.FC<Props> = ({ onChange }) => {
  const [startDate, setStartDate] = useState(DEFAULT_RANGE.startDate)
  const [endDate, setEndDate] = useState(DEFAULT_RANGE.endDate)

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
        <div className="date-range-container">
          <DateSelector
            onChange={value => onStartDatePick(value)}
            defaultDate={dayjs(DEFAULT_RANGE.startDate)}
            isStart
          />
          <DateSelector
            onChange={value => onEndDatePick(value)}
            defaultDate={dayjs(DEFAULT_RANGE.endDate)}
          />
        </div>
      </div>
    </LocalizationProvider>
  )
}
