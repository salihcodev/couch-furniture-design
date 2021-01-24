// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';
import { HiTag } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';
import { MdRemove } from 'react-icons/md';
import { connect } from 'react-redux';
import { removeBagItem, addItemToBag } from '../../redux/bag/bag.action';
import { removeWishListItem } from '../../redux/wishlist/wishlist.action';
import { GrAdd } from 'react-icons/gr';

// INTERFACE:
interface ListItemReviewerProps {
  product: any;
  dispatch: any;
  isWishlist?: boolean;
}

// COMPONENT:=>
const ListItemReviewer: React.FC<ListItemReviewerProps> = ({
  product,
  dispatch,
  isWishlist,
}) => {
  const { name, slug, imgUrl, price, count } = product;
  return (
    <li className="added-item">
      <div className="prod-img">
        <Link to={slug}>
          <div
            className="img-cont"
            style={{ background: `url(${imgUrl}) center/contain no-repeat` }}
          ></div>
        </Link>
      </div>
      <div className="prod-details">
        <div className="prod-info">
          <h5>
            <strong>{name}</strong>
          </h5>
          {isWishlist ? null : (
            <div className="prod-numbers">
              <span className="count">{count}</span>
              <span className="icon">
                <GrAdd />
              </span>
              <span className="price">{price}€</span>
            </div>
          )}
        </div>
        <div className="control-the-prod">
          {isWishlist ? (
            <button
              className="remove"
              onClick={() => dispatch(removeWishListItem(slug))}
            >
              <small>Remove</small>
            </button>
          ) : (
            <button
              className="remove"
              onClick={() => dispatch(removeBagItem(slug))}
            >
              <small>Remove</small>
            </button>
          )}
          <button className="move-to-wishlist">
            {isWishlist ? (
              <small>Move to bag</small>
            ) : (
              <small>Move to wishlist</small>
            )}
          </button>
          {isWishlist ? null : (
            <div className="change-count">
              <button
                className="increase"
                onClick={() => dispatch(addItemToBag(product))}
              >
                <IoMdAdd />
              </button>
              <button className="decrease">
                <MdRemove />
              </button>
            </div>
          )}
        </div>
        <h6 className="prod-origin-price">
          <span className="txt">{price}€</span>
          <span className="icon">
            <HiTag />
          </span>
        </h6>
      </div>
    </li>
  );
};

export default connect()(ListItemReviewer);
