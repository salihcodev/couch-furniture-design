// BASIC:
import './style.sass';

// UTILITIES:
import { connect } from 'react-redux';

// COMPONENTS:
import SudoButton from '../sudo-button/SudoButton.comp';

// INTERFACE:
interface BagInfoViewerProps {}

// COMPONENT:=>
const BagInfoViewer: React.FC<BagInfoViewerProps> = ({}) => {
  return (
    <section className="bag-info-viewer">
      <div className="bag-cont">
        <div className="total-count">
          <span className="total-txt">your bag Total:</span>
          <h4 className="total-number">544€</h4>
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
