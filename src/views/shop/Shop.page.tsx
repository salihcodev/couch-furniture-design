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
const Shop: React.FC<Props> = () => {
  return (
    <div className="shop-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="Proudly, To introduce our products."
        heroDesc={`/home${useLocation().pathname}`}
        heroDescWeight="normal"
      />
    </div>
  );
};

export default Shop;
