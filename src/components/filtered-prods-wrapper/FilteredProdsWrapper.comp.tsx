// BASIC:
import './style.sass';

// UTILITIES:

// COMPONENTS:
import ProdCard from '../prod-card/ProdCard.comp';

// INTERFACE:
interface ProdsWrapperProps {
  filteredResult: Array<[]>;
}

// COMPONENT:=>
const ProdsWrapper: React.FC<ProdsWrapperProps> = ({ filteredResult }) => {
  return (
    <section className="filtered-prods-wrapper">
      <h5 className="heading">
        A <span className="results-count">{filteredResult.length}</span>{' '}
        result/s has found for Your search term.
      </h5>
      <section className="result-list-wrapper">
        {filteredResult.map(({ id, ...product }: any) => (
          <ProdCard key={id} product={product} />
        ))}
      </section>
    </section>
  );
};

export default ProdsWrapper;
