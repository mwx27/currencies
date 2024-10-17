import { InputAdornment, TextField } from '@mui/material'
import './styles/general.css'
import { useState } from 'react'
import { SwitchButton } from './SwitchButton'

type Props = {
  targetCurrency: string
  rate: number
}

export const Calculator: React.FC<Props> = ({ targetCurrency, rate }) => {
  const [currenciesSwitched, setCurrenciesSwitched] = useState<boolean>(false)
  const onSwitch = () => setCurrenciesSwitched(!currenciesSwitched)
  const inputCurrency = currenciesSwitched ? 'PLN' : targetCurrency
  const outputCurrency = currenciesSwitched ? targetCurrency : 'PLN'
  const effectiveRate = currenciesSwitched ? +(1 / rate).toFixed(4) : rate

  const [inputAmount, setInputAmount] = useState<string>('1')
  const outputAmount = (Number(inputAmount) * effectiveRate).toFixed(2)

  const isInputValid = (input: string) => /^\d*[.,]?\d{0,2}$/.test(input)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (isInputValid(value)) setInputAmount(value.replace(',', '.'))
  }

  return (
    <div className="feature-container">
      <h2>{`Przelicz ${inputCurrency} na ${outputCurrency}`}</h2>
      <h3>{`1 ${inputCurrency} = ${effectiveRate} ${outputCurrency}`}</h3>

      <div className="inputs-container">
        <TextField
          label={`from ${inputCurrency}`}
          variant="outlined"
          value={inputAmount}
          onChange={onChange}
          autoComplete="off"
          sx={{ width: '250px' }}
          inputMode="decimal"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {'input amount:'}
                </InputAdornment>
              )
            }
          }}
        />

        <SwitchButton onSwitch={onSwitch} />

        <TextField
          label={`to ${outputCurrency}`}
          variant="outlined"
          disabled
          value={outputAmount}
          sx={{ width: '250px' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {'output amount: '}
                </InputAdornment>
              )
            }
          }}
        />
      </div>
    </div>
  )
}
