// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import ContactForm from '../../components/contact-form/ContactForm.comp';

// INTERFACE:
interface Props {}

// Contact Page:=>
const Contact: React.FC<Props> = () => {
  return (
    <main className="contact-page">
      <Hero cover={''} mini={true} heroTitle="Keep in touch" />

      {/* contact form input: */}
      <ContactForm formHeading="Contact Us" input1={{ xs: 12 }} />
    </main>
  );
};

export default Contact;
