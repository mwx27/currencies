import { getRequest } from './config'
import { CurrencyRate, CurrencyTable } from './responses'

export enum queryKeys {
  Tables = 'Tables',
  Currency = 'Currency'
}

export const getTables = () =>
  getRequest<CurrencyTable>('exchangerates/tables/a/today/')

export const getCurrency = (currencyCode: string) =>
  getRequest<CurrencyRate>(`exchangerates/rates/a/${currencyCode}/last/30`)
