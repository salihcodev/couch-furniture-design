// BASIC:
import './style.sass';

// UTILITIES:
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { connect } from 'react-redux';
import { redirectToSingleProd } from '../../redux/products/products.action';
import { addItemToWishlist } from '../../redux/wishlist/wishlist.action';

// INTERFACE:
interface ProdCardProps {
  product: any;
  parentRoute: string;
  dispatch: any;
}

// COMPONENT:=>
const ProdCard: React.FC<ProdCardProps> = ({
  product,
  parentRoute,
  dispatch,
}) => {
  const { slug, name, imgUrl, featured, price, availableColors } = product;
  const [clicked, setClicked] = useState<boolean>(false);

  // make add to wishlist button triggered once.
  const addItemToWishlistOnce = () => {
    if (!clicked) {
      setClicked(true);
      dispatch(addItemToWishlist(product));
    }
  };

  return (
    <div className="prod-card">
      <div className="prod-card-header">
        {featured && <span className="featured">Featured</span>}
        <button className="add-to-wishlist" onClick={addItemToWishlistOnce}>
          <BsHeart />
        </button>
      </div>
      <Link
        className="card-wrapper"
        to={`shop/${parentRoute}/${slug}`}
        style={{ background: `url(${imgUrl}) center/contain no-repeat` }}
        onClick={() => dispatch(redirectToSingleProd(slug))}
      >
        <div className="prod-card-footer">
          <strong className="price">{price}</strong>
          <p className="name">{name}</p>
          <ul className="av-colors">
            {availableColors.map((clr: string) => (
              <li className="clr" key={clr} style={{ background: clr }}></li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default connect()(ProdCard);
