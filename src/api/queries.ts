import { getRequest } from './config'
import { CurrencyRate, CurrencyTable } from './responses'

export enum queryKeys {
  Tables = 'Tables',
  Currency = 'Currency'
}

export const getTables = () =>
  getRequest<CurrencyTable>('exchangerates/tables/a/today/')

export const getCurrency = () =>
  getRequest<CurrencyRate>('exchangerates/rates/a/chf/')
