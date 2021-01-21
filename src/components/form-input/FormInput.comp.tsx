// BASIC:
import './style.sass';

// UTILITIES:
import { BsChevronDown } from 'react-icons/bs';

// INTERFACE:
interface FormInputProps {
  inputType: any;
  inputLabel?: any;
  inputPlaceholder?: any;
  inputId: any;
  inputName: any;
  checkbox?: boolean;
  selectInput?: boolean;
  selectOptions?: any;
  email?: boolean;
  selectWidth?: string;
  textArea?: boolean;
  textAreaRows?: number;
  password?: boolean;
}

// COMPONENT:=>
const FormInput: React.FC<FormInputProps> = ({
  inputType,
  inputId,
  inputName,
  inputLabel,
  inputPlaceholder,
  email,
  checkbox,
  selectInput,
  selectOptions,
  selectWidth,
  textArea,
  textAreaRows,
  password,
}) => {
  return (
    <>
      {!checkbox && !textArea && !selectInput && !email && !password && (
        <div className="form-input-text">
          <input type={inputType} name={inputName} id={inputId} />
          <label htmlFor={inputId}>{inputLabel}</label>
        </div>
      )}
      {email && (
        <div className="form-input-email">
          <input type={inputType} name={inputName} id={inputId} />
          <label htmlFor={inputId}>{inputLabel}</label>
        </div>
      )}
      {password && (
        <div className="form-input-password">
          <input type={inputType} name={inputName} id={inputId} />
          <label htmlFor={inputId}>{inputLabel}</label>
        </div>
      )}
      {checkbox && (
        <div className="form-input-check">
          <input type={inputType} name={inputName} id={inputId} />
          <label htmlFor={inputId}>
            <small>{inputLabel}</small>
          </label>
        </div>
      )}
      {selectInput && (
        <div className="form-input-select">
          <select name={inputName} id={inputId} style={{ width: selectWidth }}>
            {selectOptions.map(({ value, option }: any) => (
              <option value={value}>{option}</option>
            ))}
          </select>
          <span className="select-icon">
            <BsChevronDown />
          </span>
        </div>
      )}
      {textArea && (
        <div className="form-input-textarea">
          <textarea name={inputName} rows={textAreaRows} id={inputId} />
          <label htmlFor={inputId}>{inputLabel}</label>
          <small>*Optional</small>
        </div>
      )}
    </>
  );
};

export default FormInput;
