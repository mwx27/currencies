import { useState } from 'react'
import { DateSelector } from './DateSelector'
import './styles/DateRangeSelector.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { DEFAULT_RANGE } from '../../constants'
import { DatesRange } from '../../types'

type SelectorProps = {
  onChange: (value: DatesRange) => void
}

export const DateRangeSelector: React.FC<SelectorProps> = ({ onChange }) => {
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
            minDate={dayjs(endDate).subtract(1, 'year')} // this is due to restriction of NBP's API
            maxDate={dayjs(endDate).subtract(1, 'day')}
            isStart
          />
          <DateSelector
            onChange={value => onEndDatePick(value)}
            defaultDate={dayjs(DEFAULT_RANGE.endDate)}
            minDate={dayjs(startDate).add(1, 'day')}
            maxDate={dayjs(startDate).add(1, 'year')} // this is due to restriction of NBP's API
          />
        </div>
      </div>
    </LocalizationProvider>
  )
}
