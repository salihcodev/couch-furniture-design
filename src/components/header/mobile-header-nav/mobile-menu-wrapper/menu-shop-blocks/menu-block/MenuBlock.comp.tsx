// BASIC:
import './style.sass';
import React from 'react';

// UTILITIES:

// IMPORT COMPONENTS:

// INTERFACE:
interface Props {
  route: string;
  path: string;
  nested: Array<[]>;
}

// COMPONENT:=>
const MenuBlock: React.FC<Props> = ({ route, nested }) => {
  const [isShopListOpen, setIsShopListOpen] = React.useState(false);
  return (
    <div className="single-menu-block">
      <button
        className="category-title"
        onClick={() => setIsShopListOpen(!isShopListOpen)}
      >
        <strong>{route}</strong>
      </button>

      <ul
        className="shop-list"
        style={{ height: isShopListOpen ? `10rem` : `0` }}
      >
        {nested.map(({ subRoute, link }: any) => (
          <li key={subRoute}>
            <a href={link}>{subRoute}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBlock;
