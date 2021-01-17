// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import SingleCollection from './single-collection/SingleCollection.comp';

// INTERFACE:
interface ProdsCollectionsProps {}

// COMPONENT:=>
const ProdsCollections: React.FC<ProdsCollectionsProps> = () => {
  return (
    <main className="prods-collections">
      collections
      <SingleCollection />
    </main>
  );
};

export default ProdsCollections;
