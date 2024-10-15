type ExchangeRate = {
  currency: string;
  code: string;
  mid: number;
}

export type CurrencyTable = {
  effectiveDate: string;
  rates: ExchangeRate[];
}[]

type Rate = {
  no: string;
  effectiveDate: string;
  mid: number;
}

export type CurrencyRate = {
  table: string;
  currency: string;
  code: string;
  rates: Rate[];
}
