// BASIC:
import './style.sass';

// UTILITIES:
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// INTERFACE:
interface HeroProps {
  cover: any;
  mini?: boolean;
  heroTitle: string;
  heroTitleClr?: string;
  heroDesc: string;
  heroDescClr?: string;
  btn1Text: string;
  btn1Path: string;
  btn1Clr?: string;
  btn1Bkg?: string;
}

// COMPONENT:=>
const Hero: React.FC<HeroProps> = ({
  cover,
  mini,
  heroTitle,
  heroTitleClr,
  heroDesc,
  heroDescClr,
  btn1Text,
  btn1Path,
  btn1Clr,
  btn1Bkg,
}) => {
  const heroStyle = {
    height: mini ? `40vh` : `80vh`,
    background: `linear-gradient(45deg, #0003,#5e7a9199 ), url(${cover}) center/cover`,
  };
  return (
    <section className="hero-wrapper" style={heroStyle}>
      <Container>
        <div className="flex-shield">
          <div className="text-wrapper">
            <h2 className="h1 hero-title" style={{ color: heroTitleClr }}>
              {heroTitle}
            </h2>
            <p className="hero-desc" style={{ color: heroDescClr }}>
              {heroDesc}
            </p>
          </div>
          <div className="buttons-wrapper">
            <NavLink
              to={btn1Path}
              className="btn-1"
              style={{ color: btn1Clr, background: btn1Bkg }}
            >
              {btn1Text}
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
