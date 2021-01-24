// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';

// INTERFACE:
interface WrapperListItemProps {
  name: string;
  slug: string;
  imgUrl: any;
  price: number;
  availableColors: Array<[]>;
  count: number;
  isWishlist: boolean;
}

// COMPONENT:=>
const WrapperListItem: React.FC<WrapperListItemProps> = ({
  name,
  slug,
  imgUrl,
  price,
  count,
  isWishlist,
}) => {
  return (
    <li className="wrapper-list-item">
      <Link to={slug}>
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

export default WrapperListItem;
