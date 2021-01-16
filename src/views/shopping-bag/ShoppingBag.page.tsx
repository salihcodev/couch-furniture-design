// BASIC:
import './style.sass';

// UTILITIES:
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const ShoppingBag: React.FC<Props> = () => {
  return (
    <div className="shopping-bag-page">
      <Hero cover={''} mini={true} heroTitle="Your shopping bag" />
    </div>
  );
};

export default ShoppingBag;
