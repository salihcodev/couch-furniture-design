// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import LoginForm from '../../components/login-form/LoginForm.comp';

// INTERFACE:
interface Props {}

// Signin Page:=>
const Signin: React.FC<Props> = () => {
  return (
    <main className="signin-page">
      <Hero cover={''} mini={true} heroTitle="Welcome back" />

      {/* login form input: */}
      <LoginForm formHeading="Login" />
    </main>
  );
};

export default Signin;
