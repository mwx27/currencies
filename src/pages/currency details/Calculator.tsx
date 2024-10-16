import { InputAdornment, TextField } from '@mui/material'
import './styles/general.css'
import { useState } from 'react'

type Props = {
  targetCurrency: string
  rate: number
}

export const Calculator: React.FC<Props> = ({ targetCurrency, rate }) => {
  const [inputAmount, setInputAmount] = useState<string>('1')
  const outputAmount = (parseFloat(inputAmount || '0') * rate).toFixed(2)

  const isInputValid = (input: string) => /^\d*[.,]?\d{0,2}$/.test(input)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (isInputValid(value)) setInputAmount(value.replace(',', '.'))
  }

  return (
    <div className="feature-container">
      <h2>Convert to PLN</h2>
      <h3>{`1 ${targetCurrency} = ${rate} PLN`}</h3>
      <div className="inputs-container">
        <TextField
          id="input"
          label={`from ${targetCurrency}`}
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
        <TextField
          id="output"
          label={`to PLN`}
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
