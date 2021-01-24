// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';

// INTERFACE:
interface ListItemReviewerProps {
  name: string;
  slug: string;
  imgUrl: any;
  price: number;
  availableColors: Array<[]>;
}

// COMPONENT:=>
const ListItemReviewer: React.FC<ListItemReviewerProps> = ({
  name,
  slug,
  imgUrl,
  price,
}) => {
  return (
    <li className="wishlist-item">
      <div className="prod-img">
        <Link to={slug}>
          <div
            className="img-cont"
            style={{ background: `url(${imgUrl}) center/contain no-repeat` }}
          ></div>
        </Link>
      </div>
      <div className="prod-details">
        <h6 className="prod-name">{name}</h6>
        <small className="prod-price">{price}€</small>
      </div>
    </li>
  );
};

export default ListItemReviewer;
