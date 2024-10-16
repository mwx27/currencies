import { getRequest } from './config'
import { CurrencyRates, CurrencyTable } from './responses'

export enum queryKeys {
  Tables = 'Tables',
  Currency = 'Currency'
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
