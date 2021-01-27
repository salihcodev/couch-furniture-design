// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';
import { connect } from 'react-redux';
import { redirectToSingleProd } from '../../../redux/products/products.action';

// INTERFACE:
interface WrapperListItemProps {
  name: string;
  slug: string;
  category: string;
  imgUrl: any;
  price: number;
  availableColors: Array<[]>;
  count: number;
  isWishlist: boolean;
  dispatch: any;
}

// COMPONENT:=>
const WrapperListItem: React.FC<WrapperListItemProps> = ({
  name,
  slug,
  category,
  imgUrl,
  price,
  count,
  isWishlist,
  dispatch,
}) => {
  return (
    <li className="wrapper-list-item">
      <Link
        to={`/shop/${category}/${slug}`}
        onClick={() => dispatch(redirectToSingleProd(slug))}
      >
        <div className="prod-img">
          <div
            className="img-cont"
            style={{ background: `url(${imgUrl}) center/contain no-repeat` }}
          ></div>
        </div>
        <div className="prod-details">
          <h6 className="prod-name">{name}</h6>
          {isWishlist ? (
            <div className="prod-numbers">
              <span className="price">{price}€</span>
            </div>
          ) : (
            <div className="prod-numbers">
              <span className="item-count">{count}</span>
              <span className="multi-icon">
                <GrAdd />
              </span>
              <span className="price">{price}€</span>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default connect()(WrapperListItem);
