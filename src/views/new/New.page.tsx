// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import CollectionViewer from '../../components/collection-viewer/CollectionViewer.comp';

// INTERFACE:
interface Props {
  limitedProducts: any;
}

// New products Page:=>
const New: React.FC<Props> = ({ limitedProducts }) => {
  return (
    <main className="limited-page">
      <Hero cover={''} mini={true} heroTitle="New products in the stock" />

      {/* limited prods */}
      <CollectionViewer products={limitedProducts} parentRoute="new" />
    </main>
  );
};

const mapStateToProps = ({ products: { itemsToTest } }: any) => ({
  limitedProducts: itemsToTest,
});

export default connect(mapStateToProps)(New);
