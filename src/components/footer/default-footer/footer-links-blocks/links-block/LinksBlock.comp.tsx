// BASIC:
import './style.sass';

// UTILITIES:
import { Col } from 'react-bootstrap';

// IMPORT COMPONENTS:

// INTERFACE:
interface Props {
  title: string;
  nested: Array<[]>;
}

// COMPONENT:=>
const LinksBlock: React.FC<Props> = ({ title, nested }) => {
  return (
    <Col xs={6} md={6} xl={3}>
      <div className="links-block">
        <h6 className="block-title">{title}</h6>
        <ul className="block-sub-links">
          {nested.map(({ subLink, path }: any) => (
            <li key={subLink}>
              <a className="sub-link" href={path}>
                {subLink}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default LinksBlock;
