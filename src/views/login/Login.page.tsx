// BASIC:
import './style.sass';

// UTILITIES:
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const Signin: React.FC<Props> = () => {
  return (
    <div className="signin-page">
      <Hero cover={''} mini={true} heroTitle="Welcome back" />
    </div>
  );
};

export default Signin;
