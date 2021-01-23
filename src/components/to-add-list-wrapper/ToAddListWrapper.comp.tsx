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
  return (
    <section className="to-add-list-wrapper" style={{ width: `${width}rem` }}>
      <span className="to-be-hoverable"></span>
      <div className="list-container">
        {listItems.length > 0 ? (
          <ul className={`list-items ${isWishlist ? 'no-quantity' : null}`}>
            {listItems?.map(({ id, ...listItem }: any) => (
              <WrapperListItem key={id} {...listItem} />
            ))}
          </ul>
        ) : (
          <div className="bag-is-empty">
            <h5>no items to display</h5>
          </div>
        )}
      </div>
      <div className="redirect">
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
