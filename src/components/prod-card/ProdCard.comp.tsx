// BASIC:
import './style.sass';

// UTILITIES:
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { connect } from 'react-redux';
import { redirectToSingleProd } from '../../redux/products/products.action';
import { toggleWishlistItem } from '../../redux/wishlist/wishlist.action';

// INTERFACE:
interface ProdCardProps {
  product: any;
  parentRoute?: string;
  dispatch: any;
}

// COMPONENT:=>
const ProdCard: React.FC<ProdCardProps> = ({
  product,
  parentRoute,
  dispatch,
}) => {
  const { slug, name, imgUrl, featured, price, availableColors } = product;

  // LEGACY JUST FOR TESTING :)
  // const [clicked, setClicked] = useState<boolean>(false);
  // make add to wishlist button triggered once.
  // const addItemToWishlistOnce = () => {
  //   if (!clicked) {
  //     setClicked(true);
  //     dispatch(toggleWishlistItem(product));
  //   }
  // };

  const [addedStyle, setAddedStyle] = useState<boolean>(false);

  return (
    <div className="prod-card">
      <div className="prod-card-header">
        {featured && <small className="featured">Featured</small>}
        <button
          style={{
            background: addedStyle ? '#db8c80' : '',
            color: addedStyle ? 'white' : '',
          }}
          className="add-to-wishlist"
          onClick={() =>
            dispatch(toggleWishlistItem(product), setAddedStyle(!addedStyle))
          }
        >
          <BsHeart />
        </button>
      </div>
      <Link
        className="card-wrapper"
        to={`shop/${parentRoute}/${slug}`}
        style={{ background: `url(${imgUrl}) center/contain no-repeat` }}
        onClick={() => dispatch(redirectToSingleProd(slug))}
      ></Link>
      <div className="temp-info">
        <div>
          <strong className="price">{price} €</strong>
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="prod-card-footer">
        <strong className="price">{price} €</strong>
        <p className="name">{name}</p>
        <ul className="av-colors">
          {availableColors.map((clr: string) => (
            <li className="clr" key={clr} style={{ background: clr }}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect()(ProdCard);
