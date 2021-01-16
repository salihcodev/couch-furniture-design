// BASIC:
import './style.sass';

// UTILITIES:
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const Signup: React.FC<Props> = () => {
  return (
    <div className="signup-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="We are happy for joining you our community :)"
      />
    </div>
  );
};

export default Signup;
