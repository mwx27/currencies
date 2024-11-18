import switchIcon from './assets/switch.svg'
import './styles/SwitchButton.css'

type SwitchButtonProps = {
  onSwitch: VoidFunction
}

export const SwitchButton: React.FC<SwitchButtonProps> = ({ onSwitch }) => (
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
