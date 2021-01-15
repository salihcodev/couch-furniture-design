// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';

// App interface:
interface Props {}

// Home Page:=>
const Error404Page: React.FC<Props> = () => {
  return (
    <section className="not-found">
      <div className="flex-shield">
        <h2 className="h1 error-title">
          Error <strong className="error-num">404</strong> Not Found
        </h2>
        <p className="error-msg">
          Sorry, Chances are you hit a broken link, Or redirected to not existed
          page.. Sadness
        </p>
        <Link className="back-to-home" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default Error404Page;
