// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row } from 'react-bootstrap';
import categoriesList from '../../components-data/categories';

// IMPORT COMPONENTS:
import Category from './category/Category.comp';

// INTERFACE:
interface ServicesProps {}

// COMPONENT:=>
const Categories: React.FC<ServicesProps> = () => {
  return (
    <Container>
      <section className="categories-wrapper">
        <Row>
          {categoriesList.map(({ img, ...rest }) => (
            <Category img={img} {...rest} key={rest.heading} />
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Categories;
