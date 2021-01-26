// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';

// COMPONENTS:
import SudoButton from '../sudo-button/SudoButton.comp';

// INTERFACE:
interface BagInfoViewerProps {
  bagList: any;
}

// COMPONENT:=>
const BagInfoViewer: React.FC<BagInfoViewerProps> = ({ bagList }) => {
  // BAG TOTAL PRICE:
  const tax = 1.09;
  const collectedPrices = bagList.map(
    ({ count, price }: any) => count * price * tax
  );
  const bagTotalPrice = collectedPrices.reduce(
    (acc: any, curr: any) => acc + curr
  );

  return (
    <section className="bag-info-viewer">
      <div className="bag-cont">
        <div className="total-count">
          <span className="total-txt">your bag Total:</span>
          <h4 className="total-number">{bagTotalPrice.toFixed(2)} €</h4>
        </div>
        <div className="total-taxes">
          <span className="total-txt">Total taxes:</span>
          <h5 className="total-number">
            {(bagTotalPrice - bagTotalPrice / tax).toFixed(2)} €
          </h5>
        </div>
        <div className="checkout-btn">
          <SudoButton>
            <button className="checkout sudo-btn">Checkout</button>
          </SudoButton>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ bag: { bagList } }: any) => ({
  bagList: bagList,
});

export default connect(mapStateToProps)(BagInfoViewer);
