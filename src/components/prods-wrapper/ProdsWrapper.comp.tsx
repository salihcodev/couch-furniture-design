// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import ProdsCollections from '../prods-collections/ProdsCollections.comp';

// INTERFACE:
interface ProdsWrapperProps {}

// COMPONENT:=>
const ProdsWrapper: React.FC<ProdsWrapperProps> = () => {
  return (
    <section className="prods-wrapper">
      <ProdsCollections />
    </section>
  );
};

export default ProdsWrapper;
