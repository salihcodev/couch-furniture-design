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
    <div className="new-page">
      <Hero cover={''} mini={true} heroTitle="New products in the stock" />
    </div>
  );
};

export default Shop;
