// BASIC:
import './style.sass';

// UTILITIES:
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
      />
    </div>
  );
};

export default Trade;
