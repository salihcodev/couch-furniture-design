// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';

// INTERFACE:
interface WrapperListItemProps {
  name: string;
  slug: string;
  imgUrl: any;
  price: number;
  availableColors: Array<[]>;
  quantity: number;
}

// COMPONENT:=>
const WrapperListItem: React.FC<WrapperListItemProps> = ({
  name,
  slug,
  imgUrl,
  price,
  quantity,
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
          <small className="prod-price">{price}€</small>
          <span className="prod-quantity">quantity: {quantity}</span>
        </div>
      </Link>
    </li>
  );
};

export default WrapperListItem;
