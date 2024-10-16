import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { TIME_FORMAT_QUERY, TIME_FORMAT_UI } from '../../constants'

type DayjsType = dayjs.Dayjs

type DateSelectorProps = {
  onChange: (value: string) => void
  defaultDate: DayjsType
  minDate: DayjsType
  maxDate: DayjsType
  isStart?: boolean
}

export const DateSelector: React.FC<DateSelectorProps> = props => {
  const { onChange, defaultDate, minDate, maxDate, isStart = false } = props

  return (
    <DatePicker
      defaultValue={defaultDate}
      onChange={date => onChange(date?.format(TIME_FORMAT_QUERY) || '')}
      label={isStart ? 'Start Date' : 'End Date'}
      format={TIME_FORMAT_UI}
      disableFuture
      minDate={minDate}
      maxDate={maxDate}
      slotProps={{
        day: {
          sx: {
            color: 'gray',
            '&.Mui-selected': {
              backgroundColor: 'gray',
              color: 'black',
              border: 'none'
            },
            '&.MuiPickersDay-today': {
              backgroundColor: 'green',
              color: 'black',
              border: 'none'
            }
          }
        },
        desktopPaper: {
          sx: {
            border: '1px solid gray',
            backgroundColor: '#242424e0'
          }
        }
      }}
    />
  )
}
