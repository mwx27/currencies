import { InputAdornment, TextField } from '@mui/material'
import './styles/general.css'

type Props = {
  targetCurrency: string
  rate: number
}

export const Calculator: React.FC<Props> = ({ targetCurrency, rate }) => {
  return (
    <div className="feature-container">
      <h2>Convert to PLN</h2>
      <h3>{`1 ${targetCurrency} = ${rate} PLN`}</h3>
      <div className="inputs-container">
        <TextField
          id="outlined-basic"
          label={`from ${targetCurrency}`}
          variant="outlined"
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
          id="outlined-basic"
          label={`to PLN`}
          variant="outlined"
          disabled
          value={'hfjdkl'}
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
