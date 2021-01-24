// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';
import { HiTag } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';
import { MdRemove } from 'react-icons/md';
// INTERFACE:
interface ListItemReviewerProps {
  name: string;
  slug: string;
  imgUrl: any;
  price: number;
  availableColors: Array<[]>;
  quantity: number;
}

// COMPONENT:=>
const ListItemReviewer: React.FC<ListItemReviewerProps> = ({
  name,
  slug,
  imgUrl,
  price,
  quantity,
}) => {
  return (
    <li className="bagList-item">
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
        <span className="prod-quantity">quantity: {quantity}</span>
      </div>
      <div className="control">
        <button className="remove">
          <small>Remove</small>
        </button>
        <button className="wishlist">
          <small>Move to wishlist</small>
        </button>
        <div className="change-qunt">
          <button className="add">
            <IoMdAdd />
          </button>
          <button className="remove">
            <MdRemove />
          </button>
        </div>
      </div>
      <h6 className="prod-price">
        <span className="txt">{price}€</span>
        <span className="icon">
          <HiTag />
        </span>
      </h6>
    </li>
  );
};

export default ListItemReviewer;
