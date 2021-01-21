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
}) => {
  const btnStyles = {
    background: bkg,
    color: clr,
    borderColor: borderClr,
    borderWidth: borderW,
  };

  return (
    <button type={btnType} className="sudo-btn" style={btnStyles}>
      {btnTxt}
    </button>
  );
};

export default SudoButton;
