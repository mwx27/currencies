import { getRequest } from './config'
import { CurrencyRates, CurrencyTable } from './responses'

export enum queryKeys {
  Tables = 'Tables',
  CurrencyRatesInRange = 'CurrencyRatesInRange',
  CurrencyRateNow = 'CurrentRateNow'
}

export const getTables = () =>
  getRequest<CurrencyTable>('exchangerates/tables/a/')

export const getCurrencyInRange = (
  currencyCode: string,
  startDate: string,
  endDate: string
) =>
  getRequest<CurrencyRates>(
    `exchangerates/rates/a/${currencyCode}/${startDate}/${endDate}`
  )

export const getCurrency = (currencyCode: string) =>
  getRequest<CurrencyRates>(`exchangerates/rates/a/${currencyCode}`)
