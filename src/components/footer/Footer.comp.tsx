// BASIC:
import './style.sass';

// UTILITIES:

// IMPORT COMPONENTS:
import DefaultFooter from './default-footer/DefaultFooter.comp';
import SubFooter from './sub-footer/SubFooter.comp';

// INTERFACE:
interface Props {}

// COMPONENT:=>
const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer-wrapper">
      <DefaultFooter />
      <SubFooter />
    </footer>
  );
};

export default Footer;
