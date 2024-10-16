import './styles/SwitchButton.css'
import switchIcon from './assets/switch.svg'

type Props = {
  onSwitch: VoidFunction
}

export const SwitchButton: React.FC<Props> = ({ onSwitch }) => (
  <button
    className="switch-button"
    onClick={onSwitch}
  >
    <img
      src={switchIcon}
      alt="Switch Icon"
    />
  </button>
)
