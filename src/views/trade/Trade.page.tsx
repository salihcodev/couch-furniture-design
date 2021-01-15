// BASIC:
import './style.sass';

// UTILITIES:
import { useLocation } from 'react-router-dom';
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const Trade: React.FC<Props> = () => {
  return (
    <div className="reade-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="Let's start businesses with each other"
        heroDesc={`/home${useLocation().pathname}`}
        heroDescWeight="normal"
      />
    </div>
  );
};

export default Trade;
