// BASIC:
import './style.sass';

// UTILITIES:
import { Link } from 'react-router-dom';

// COMPONENTS:
import WrapperListItem from './wrapper-list-item/WrapperListItem';
import SudoButton from '../../components/sudo-button/SudoButton.comp';

// INTERFACE:
interface ToAddListProps {
  listItems: Array<[]>;
  width: number;
  redirectTo: string;
  redirectTxt: string;
  isWishlist?: boolean;
}

// COMPONENT:=>
const ToAddListWrapper: React.FC<ToAddListProps> = ({
  listItems,
  width,
  redirectTo,
  redirectTxt,
  isWishlist,
}) => {
  const tax = 1.09;
  const collectedPrices = listItems.map(
    ({ count, price }: any) => count * price * tax
  );

  const bagTotalPrice = collectedPrices.reduce(
    (acc: any, curr: any) => acc + curr,
    0
  );

  return (
    <section className="to-add-list-wrapper" style={{ width: `${width}rem` }}>
      <span className="to-be-hoverable"></span>
      <div className="list-container">
        {listItems?.length > 0 ? (
          <ul className="list-items">
            {listItems?.map(({ id, ...listItem }: any) => (
              <WrapperListItem key={id} {...listItem} isWishlist={isWishlist} />
            ))}
          </ul>
        ) : (
          <div className="bag-is-empty">
            <h5>no items to display</h5>
          </div>
        )}
      </div>
      <div className="redirect">
        <h6 className="total-number">
          bag total: {bagTotalPrice.toFixed(2)} €
        </h6>
        <SudoButton>
          <Link to={redirectTo} className="redirect-link sudo-btn">
            {redirectTxt}
          </Link>
        </SudoButton>
      </div>
    </section>
  );
};

export default ToAddListWrapper;
