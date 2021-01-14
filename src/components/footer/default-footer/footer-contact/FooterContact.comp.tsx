// BASIC:
import './style.sass';

// UTILITIES:
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';

import { VscArrowRight } from 'react-icons/vsc';

// IMPORT COMPONENTS:

// INTERFACE:
interface Props {}

// COMPONENT:=>
const FooterContact: React.FC<Props> = () => {
  return (
    <section className="contact-and-social">
      <h5 className="contact-title">contact with us</h5>
      <p className="contact-desc">
        We believe good design is a way of life. That's why we're committed to
        sharing exclusive offers to our followers.
      </p>

      <div className="quick-mail">
        <form>
          <input
            type="email"
            name="quick-email"
            id="quick-mail"
            placeholder="Enter email address"
          />
          <button type="submit">
            <span>
              <VscArrowRight />
            </span>
          </button>
        </form>
      </div>
      <ul className="social-links">
        <li>
          <a href="#">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaPinterestP />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default FooterContact;
