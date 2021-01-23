// BASIC:
import './style.sass';

// UTILITIES:

// INTERFACE:
interface SudoButtonProps {}

// COMPONENT:=>
const SudoButton: React.FC<SudoButtonProps> = ({ children }) => {
  return <>{children}</>;
};

export default SudoButton;
