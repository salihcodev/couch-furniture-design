// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';

// INTERFACE:
interface ProdCardProps {
  product: any;
}

// COMPONENT:=>
const ProdCard: React.FC<ProdCardProps> = ({ product }) => {
  const { slug, name, imgUrl, featured, price, availableColors } = product;

  return (
    <div className="prod-card">
      <div className="prod-card-header">
        {featured && <span className="featured">Featured</span>}
        <button className="add-to-wishlist">
          <BsHeart />
        </button>
      </div>
      <Link
        className="card-wrapper"
        to={slug}
        style={{ background: `url(${imgUrl}) center/contain no-repeat` }}
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

export default ProdCard;
