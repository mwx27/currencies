import { useParams } from 'react-router-dom'
import { getFlagEmoji } from '../../utils'

export const CurrencyDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>()

  return (
    <div>
      <h1>
        {`CurrencyDetails of ${code}`} {code && getFlagEmoji(code)}
      </h1>
    </div>
  )
}
