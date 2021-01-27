// BASIC:
import './style.sass';

// UTILITIES:
import { useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { connect } from 'react-redux';
import { searchTermSearch } from '../../redux/products/products.action';
import { setConstantValue } from 'typescript';

// COMPONENTS:

// INTERFACE:
interface ProdsFilterProps {
  dispatch: any;
  filteredResult: Array<[]>;
}

// COMPONENT:=>
const ProdsFilter: React.FC<ProdsFilterProps> = ({
  dispatch,
  filteredResult,
}) => {
  const [inputVal, setInputVal] = useState<string>('');

  const [error, setError] = useState<object | any>({
    errMsg: ``,
    showErr: false,
  });

  const errorHandler = (showErr: boolean, errMsg?: string) => {
    setError({ errMsg, showErr });
  };

  const handelOnChange = (e: any) => {
    const { value } = e.target;
    const cleanValue = value.trim().toLowerCase();

    setInputVal(cleanValue);
    if (cleanValue.length > 2) {
      dispatch(searchTermSearch(cleanValue));
      errorHandler(false);
    } else if (cleanValue.length === 0) {
      errorHandler(false);
    } else {
      dispatch(searchTermSearch(null));
      errorHandler(true, `* Your search term must be at least 3 characters`);
    }
  };

  return (
    <section className="prods-filter">
      <div className="filter-header">
        <h5 className="filter-title">Filter</h5>
        <span className="filter icon">
          <BiFilterAlt />
        </span>
      </div>
      <div className="filter-body">
        <div className="by by-name">
          <h6>By name:</h6>
          <input
            type="text"
            name="search-with-name"
            id="search-with-name"
            onChange={handelOnChange}
          />
          <div className="error-wrapper">
            {error.showErr && (
              <small className="short-term">{error.errMsg}</small>
            )}
            {filteredResult.length === 0 && inputVal.length > 2 && (
              <small className="mess-term">
                Your search term doesn't match <span>({inputVal})</span> any,
                Sadness.
              </small>
            )}
          </div>
        </div>
        <div className="by by-category">
          <h6>By category:</h6>
          <div className="cat">
            <input
              type="checkbox"
              name="search-with-category"
              id="search-with-category"
              placeholder="Office, Bedroom, Decor ... "
            />
            <label htmlFor="search-with-category">
              <small>Office</small>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ products: { filteredResult } }: any) => ({
  filteredResult: filteredResult,
});

export default connect(mapStateToProps)(ProdsFilter);
