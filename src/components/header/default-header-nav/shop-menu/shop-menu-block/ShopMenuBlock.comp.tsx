// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';

// INTERFACE:
interface Props {
  route: string;
  path: string;
  nested: Array<[]>;
}

// COMPONENT:=>
const ShopMenuBlock: React.FC<Props> = ({ route, path, nested }) => {
  return (
    <div className="menu-block">
      <Link to={path} className="block-title">
        <strong>{route}</strong>
      </Link>

      <ul className="block-list">
        {nested.map(({ subRoute, link }: any) => (
          <li key={subRoute}>
            <Link to={link}>{subRoute}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopMenuBlock;
