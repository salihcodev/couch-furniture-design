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
  // for (const cat in categories) {
  //   console.log(cat, ':', categories[cat]);
  // }

  // extract every single collection:
  const collections = [];

  for (const cat in categories) {
    collections.push(categories[cat]);
  }

  return (
    <main className="prods-collections">
      {collections.map(({ ...collection }: any) => (
        <SingleCollection key={collection.id} {...collection} />
      ))}
    </main>
  );
};

const mapStateToProps = ({ products: { categories } }: any) => ({
  categories: categories,
});

export default connect(mapStateToProps)(ProdsCollections);
