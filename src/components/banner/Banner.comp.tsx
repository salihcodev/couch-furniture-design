// BASIC:
import './style.sass';

// UTILITIES:
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// INTERFACE:
interface BannerProps {
  headingTxt: string;
  headingClr: string;
  descTxt: string;
  descClr: string;
  bkg: string;
  height: number;
  btnTxt: string;
  btnClr: string;
  withBtn: boolean;
  btnBorderClr: string;
  btnBkg: string;
  btnRadius: boolean;
}

// COMPONENT:=>
const Banner: React.FC<BannerProps> = ({
  headingTxt,
  headingClr,
  descTxt,
  descClr,
  bkg,
  height,
  btnTxt,
  btnClr,
  withBtn,
  btnBorderClr,
  btnBkg,
  btnRadius,
}) => {
  const wrapperStyle = {
    background: bkg,
    minHeight: `${height}rem`,
  };

  const headingStyle = {
    color: headingClr,
  };

  const descStyle = {
    color: descClr,
  };

  const btnStyle = {
    color: btnClr,
    background: btnBkg,
    border: `2px solid ${btnBorderClr}`,
    borderRadius: btnRadius ? `0.7rem` : '',
  };

  return (
    <section className="banner" style={wrapperStyle}>
      <Container>
        <div className="flex-shield">
          <h2 className="banner-heading" style={headingStyle}>
            {headingTxt}
          </h2>
          <p className="banner-desc" style={descStyle}>
            {descTxt}
          </p>
          {withBtn && (
            <Link to="contact" className="banner-btn" style={btnStyle}>
              {btnTxt}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
