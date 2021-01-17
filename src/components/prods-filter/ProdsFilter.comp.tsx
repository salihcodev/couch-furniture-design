// BASIC:
import './style.sass';

// UTILITIES:
import { BiFilterAlt } from 'react-icons/bi';

// INTERFACE:
interface ProdsFilterProps {}

// COMPONENT:=>
const ProdsFilter: React.FC<ProdsFilterProps> = () => {
  return (
    <section className="prods-filter">
      <div className="filter-header">
        <h5 className="filter-title">Filter</h5>
        <span className="filter icon">
          <BiFilterAlt />
        </span>
      </div>
    </section>
  );
};

export default ProdsFilter;
