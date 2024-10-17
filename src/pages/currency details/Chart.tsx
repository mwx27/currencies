import { Line } from 'react-chartjs-2'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'

type ChartProps = {
  currencyData?: {
    dates: string[]
    values: number[]
    code: string
  }
}

export const Chart: React.FC<ChartProps> = ({ currencyData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const lineChartData = {
    labels: currencyData?.dates,
    datasets: [
      {
        label: `Średni kurs ${currencyData?.code} do PLN`,
        data: currencyData?.values,
        fill: false,
        backgroundColor: '#49e61051',
        borderColor: '#49e61051'
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      title: {
        display: true
      }
    }
  }

  return (
    <Line
      options={options}
      data={lineChartData}
    />
  )
}
