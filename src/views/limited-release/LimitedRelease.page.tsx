// BASIC:
import './style.sass';

// UTILITIES:
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
      />
    </div>
  );
};

export default LimitedReleases;
