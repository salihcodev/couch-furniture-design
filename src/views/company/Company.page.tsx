// BASIC:
import './style.sass';

// UTILITIES:
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const Company: React.FC<Props> = () => {
  return (
    <div className="company-page">
      <Hero cover={''} mini={true} heroTitle="About us" />
    </div>
  );
};

export default Company;
