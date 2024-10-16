import { DatesRange } from '../types'
import { getRequest } from './config'
import { CurrencyRates, CurrencyTable } from './responses'

export enum QueryKeys {
  Tables = 'Tables',
  CurrencyRatesInRange = 'CurrencyRatesInRange',
  CurrencyRateNow = 'CurrentRateNow'
}

export const getTables = () =>
  getRequest<CurrencyTable>('exchangerates/tables/a/')

export const getCurrencyInRange = (currencyCode: string, range: DatesRange) =>
  getRequest<CurrencyRates>(
    `exchangerates/rates/a/${currencyCode}/${range.startDate}/${range.endDate}`
  )

export const getCurrency = (currencyCode: string) =>
  getRequest<CurrencyRates>(`exchangerates/rates/a/${currencyCode}`)
