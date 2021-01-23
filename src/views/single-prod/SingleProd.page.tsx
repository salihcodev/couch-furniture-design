// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';

// COMPONENTS:
import Hero from '../../components/hero/Hero.comp';
import SingleProdViewer from '../../components/single-prod-viewer/SingleProdViewer.comp';
import SingleProdDetails from '../../components/single-prod-details/ProdDetails.comp';

// INTERFACE:

// App interface:
interface Props {
  singleProduct: any;
}

// Home Page:=>
const SingleProd: React.FC<Props> = ({ singleProduct }) => {
  return (
    <main className="single-prod-page">
      {/* hero */}
      <Hero
        cover={''}
        mini={true}
        heroTitle={`More details about`}
        titleUni={singleProduct[0]?.name}
      />

      {/* single prod  viewer */}
      <SingleProdViewer singleProduct={singleProduct[0]} />

      {/* single prod  details */}
      <SingleProdDetails singleProduct={singleProduct[0]} />
    </main>
  );
};

const mapStateToProps = ({ products: { singleProduct } }: any) => ({
  singleProduct: singleProduct,
});

export default connect(mapStateToProps)(SingleProd);
