// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:

// INTERFACE:
interface SingleProdViewerProps {
  singleProduct: any;
}

// COMPONENT:=>
const SingleProdViewer: React.FC<SingleProdViewerProps> = ({
  singleProduct,
}) => {
  const {
    availableColors,
    description,
    details,
    featured,
    freeShipping,
    id,
    images,
    imgUrl,
    name,
    onlineReturnPolicy,
    price,
    returnAndExchange,
    slug,
  } = singleProduct;
  return <section className="single-prod-viewer"></section>;
};

export default SingleProdViewer;
