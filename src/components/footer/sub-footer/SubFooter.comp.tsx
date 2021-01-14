// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// IMPORT COMPONENTS:
import { ReactComponent as Logo } from '../../../assets/couchFurnitureDesign.logo-min.svg';
import { IoBagOutline, IoHeartOutline } from 'react-icons/io5';

// INTERFACE:
interface Props {}

// COMPONENT:=>
const SubFooter: React.FC<Props> = () => {
  return <Container fluid>SubFooter</Container>;
};

export default SubFooter;
