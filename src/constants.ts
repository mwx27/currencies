import dayjs from 'dayjs'
import { DatesRange } from './types'

export const TIME_FORMAT_QUERY = 'YYYY-MM-DD'
export const TIME_FORMAT_UI = 'DD-MM-YYYY'

export const DEFAULT_VALUES: DatesRange = {
  startDate: dayjs().subtract(30, 'day').format(TIME_FORMAT_QUERY),
  endDate: dayjs().format(TIME_FORMAT_QUERY)
}
