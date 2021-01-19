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

// Limited products Page:=>
const LimitedReleases: React.FC<Props> = ({ limitedProducts }) => {
  return (
    <main className="limited-page">
      <Hero
        cover={''}
        mini={true}
        heroTitle="Limited releases, Take a look before it gets out of the stock!"
      />

      {/* limited prods */}
      <CollectionViewer
        products={limitedProducts}
        parentRoute="limited-release"
      />
    </main>
  );
};

const mapStateToProps = ({ products: { itemsToTest } }: any) => ({
  limitedProducts: itemsToTest,
});

export default connect(mapStateToProps)(LimitedReleases);
