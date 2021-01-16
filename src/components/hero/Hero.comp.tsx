// BASIC:
import './style.sass';

// UTILITIES:
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

// INTERFACE:
interface HeroProps {
  cover: any;
  mini?: boolean;
  heroTitle: string;
  heroTitleClr?: string;
  heroDesc?: any;
  heroDescClr?: string;
  heroDescWeight?: any;
  btn1Text?: string;
  btn1Path?: any;
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
  heroDescWeight,
  btn1Text,
  btn1Path,
  btn1Clr,
  btn1Bkg,
}) => {
  // setup a style to hero container:
  const heroStyle = {
    height: mini ? `25vh` : `100vh`,
    background: `linear-gradient(45deg, #0005,#5e7a9199 ), url(${cover}) center/cover`,
  };

  // extract current user location:
  const { pathname } = useLocation();

  return (
    <section className="hero-wrapper" style={heroStyle}>
      <Container>
        <div className="flex-shield">
          <div className="text-wrapper">
            {mini && (
              <p className="hero-desc mini">
                <Link to="/">
                  <FaHome />
                </Link>
                <span>{pathname}</span>
              </p>
            )}
            <h2
              className="h1 hero-title"
              style={{ color: heroTitleClr, fontSize: mini ? `2rem` : `4rem` }}
            >
              {heroTitle}
            </h2>
            {!mini && (
              <p
                className="hero-desc default"
                style={{ color: heroDescClr, fontWeight: heroDescWeight }}
              >
                {heroDesc}
              </p>
            )}
          </div>
          {!mini && (
            <div className="buttons-wrapper">
              <NavLink
                to={btn1Path}
                className="btn-1"
                style={{ color: btn1Clr, background: btn1Bkg }}
              >
                {btn1Text}
              </NavLink>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
