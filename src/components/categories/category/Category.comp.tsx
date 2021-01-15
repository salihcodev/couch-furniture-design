// BASIC:
import { Col } from 'react-bootstrap';
import './style.sass';

// UTILITIES:
import { IoArrowForward } from 'react-icons/io5';

// INTERFACE:
interface ServicesProps {
  img: any;
  heading: string;
  description: string;
  link: string;
}

// COMPONENT:=>
const Category: React.FC<ServicesProps> = ({
  img,
  heading,
  description,
  link,
}) => {
  const catStyle = {
    background: `linear-gradient(-45deg, #0008, transparent),url(${img}) center/cover`,
  };
  return (
    <Col sm={12} md={6}>
      <div className="category" style={catStyle}>
        <div className="flex-shield">
          <h2 className="cat-heading">{heading}</h2>
          <p className="cat-desc">{description}</p>
          <a href="#" className="visit-cat">
            {link}
            <span>
              <IoArrowForward />
            </span>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default Category;
