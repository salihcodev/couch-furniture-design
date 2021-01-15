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
const LimitedReleases: React.FC<Props> = () => {
  return (
    <div className="limited-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="Limited releases, Take a look before it gets out of the stock!"
        heroDesc={`/home${useLocation().pathname}`}
        heroDescWeight="normal"
      />
    </div>
  );
};

export default LimitedReleases;
