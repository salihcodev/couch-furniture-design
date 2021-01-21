// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';

// INTERFACE:
interface Props {}

// Signin Page:=>
const Signin: React.FC<Props> = () => {
  return (
    <main className="signin-page">
      <Hero cover={''} mini={true} heroTitle="Welcome back" />
    </main>
  );
};

export default Signin;
