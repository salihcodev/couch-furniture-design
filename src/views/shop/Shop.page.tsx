// BASIC:
import './style.sass';

// UTILITIES:
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
        heroTitle="Proud to introduce our products."
      />
    </div>
  );
};

export default Shop;
