import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { TIME_FORMAT_QUERY, TIME_FORMAT_UI } from '../../constants'

type DayjsType = dayjs.Dayjs

type Props = {
  onChange: (value: string) => void
  defaultDate?: DayjsType
  isStart?: boolean
}

export const DateSelector: React.FC<Props> = ({
  onChange,
  defaultDate,
  isStart
}) => {
  return (
    <DatePicker
      defaultValue={defaultDate}
      onChange={date => onChange(date?.format(TIME_FORMAT_QUERY) || '')}
      label={isStart ? 'Start Date' : 'End Date'}
      format={TIME_FORMAT_UI}
      slotProps={{
        day: {
          sx: {
            color: 'gray',
            '&.Mui-selected': {
              backgroundColor: 'gray',
              color: 'black'
            },
            '&.MuiPickersDay-today': {
              backgroundColor: 'green',
              color: 'black'
            }
            // '&.Mui-disabled': {
            //   color: '#cccccc'
            // }
          }
        },
        yearButton: {
          sx: {
            color: 'green',
            borderRadius: '5px solid yellow',
            backgroundColor: '#000000'
          }
        },
        desktopPaper: {
          sx: {
            color: 'green',
            borderRadius: '5px solid yellow',
            backgroundColor: '#242424'
          }
        },
        textField: {
          sx: {
            color: 'yellow',
            border: '1px solid gray'
            // backgroundColor: 'gray'
          }
        },
        layout: {
          // sx: {
          //   color: 'yellow',
          //   border: '1px solid blue',
          //   backgroundColor: 'red'
          // }
        }
      }}
    />
  )
}
