// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import AboutSection from '../../components/about-section/AboutSection.comp';

// INTERFACE:
interface Props {}

// About Page:=>
const Company: React.FC<Props> = () => {
  return (
    <main className="company-page">
      <Hero cover={''} mini={true} heroTitle="About us" />

      {/* about section */}
      <AboutSection />
    </main>
  );
};

export default Company;
