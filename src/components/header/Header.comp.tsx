// BASIC:
import './style.sass';
// UTILITIES:

// import { Container } from 'react-bootstrap';

// IMPORT COMPONENTS:
import SubHeaderNav from './sub-header-nav/SubHeaderNav.comp';
import MobileHeaderNav from './mobile-header-nav/MobileHeaderNav.comp';
import DefaultHeaderNav from './default-header-nav/DefaultHeaderNav.comp';

// COMPONENT:=>
const Header = () => {
  return (
    <header className="header-wrapper">
      {/* <Container fluid> */}
      {/* sub nav */}
      <SubHeaderNav />
      {/* rest of header 'header body' */}
      <MobileHeaderNav />
      <DefaultHeaderNav />
      {/* </Container> */}
    </header>
  );
};

export default Header;
