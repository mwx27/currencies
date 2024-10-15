import { useNavigate } from 'react-router-dom'
import { getFlagEmoji } from '../../utils'

type CurrencyItemProps = {
  code: string
  mid: number
  currency: string
}

export const CurrencyItem: React.FC<CurrencyItemProps> = ({
  code,
  mid,
  currency
}) => {
  const navigate = useNavigate()
  const goToDetails = () => navigate(`/currency/${code}`)

  return (
    <tr onClick={goToDetails}>
      <td>
        {getFlagEmoji(code)} {code}
        {` - ${currency}`}
      </td>
      <td>{mid}</td>
    </tr>
  )
}
