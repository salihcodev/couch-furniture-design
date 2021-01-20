// BASIC:
import './style.sass';

// UTILITIES:
import { Container } from 'react-bootstrap';
import tradeFeatures from '../../components-data/tradeFeatures';

// INTERFACE:
interface TradeFeaturesProps {}

// COMPONENT:=>
const TradeFeatures: React.FC<TradeFeaturesProps> = () => {
  return (
    <section className="trade-feat-wrapper">
      <Container>
        <ul className="trade-feat-list">
          {tradeFeatures.map(({ heading, icon, description }) => (
            <li>
              <h4 className="heading">
                <span className="icon">{icon}</span>
                <span className="txt">{heading}</span>
              </h4>
              <p className="description">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TradeFeatures;
