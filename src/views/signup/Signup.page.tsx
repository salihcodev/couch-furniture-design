// BASIC:
import './style.sass';

// UTILITIES:
// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import SignUpForm from '../../components/signup-form/SignUpForm';

// INTERFACE:

// App interface:
interface Props {}

// Home Page:=>
const Signup: React.FC<Props> = () => {
  return (
    <main className="signup-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="We are happy for joining you our community :)"
      />

      {/* signup form */}
      <SignUpForm formHeading="Sign up" />
    </main>
  );
};

export default Signup;
