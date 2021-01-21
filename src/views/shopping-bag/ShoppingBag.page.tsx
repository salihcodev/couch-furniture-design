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
    <main className="shopping-bag-page">
      <Hero cover={''} mini={true} heroTitle="Your shopping bag" />
    </main>
  );
};

export default ShoppingBag;
