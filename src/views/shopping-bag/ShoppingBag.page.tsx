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
const ShoppingBag: React.FC<Props> = () => {
  return (
    <div className="shopping-bag-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="Your shopping bag"
        heroDesc={`/home${useLocation().pathname}`}
        heroDescWeight="normal"
      />
    </div>
  );
};

export default ShoppingBag;
