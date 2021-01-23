// BASIC:
import './style.sass';

// UTILITIES:

// INTERFACE:
interface SudoButtonProps {
  btnTxt: string;
  btnType: any;
  borderClr: string;
  borderW: number;
  bkg: string;
  clr: string;
}

// COMPONENT:=>
const SudoButton: React.FC<SudoButtonProps> = ({
  btnTxt,
  btnType,
  borderClr,
  borderW,
  bkg,
  clr,
  children,
}) => {
  const btnStyles = {
    background: bkg,
    color: clr,
    borderColor: borderClr,
    borderWidth: borderW,
  };

  return (
    <button type={btnType} className="sudo-btn" style={btnStyles}>
      <span className="txt">{btnTxt}</span>
      <span className="icon">{children}</span>
    </button>
  );
};

export default SudoButton;
