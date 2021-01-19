// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';

// COMPONENTS:
import SingleCollection from './single-collection/SingleCollection.comp';

// INTERFACE:
interface ProdsCollectionsProps {
  categories: Array<[]>;
}

// COMPONENT:=>
const ProdsCollections: React.FC<ProdsCollectionsProps> = ({ categories }) => {
  // extract every single collection:

  return (
    <main className="prods-collections">
      {categories.map(({ id, ...collection }: any) => (
        <SingleCollection key={id} {...collection} />
      ))}
    </main>
  );
};

const mapStateToProps = ({ products: { categories } }: any) => ({
  categories: categories,
});

export default connect(mapStateToProps)(ProdsCollections);
