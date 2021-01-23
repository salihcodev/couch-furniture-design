// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';
import SudoButton from '../sudo-button/SudoButton.comp';

// COMPONENTS:
import FormInput from '../form-input/FormInput.comp';

// INTERFACE:
interface FormProps {
  formHeading: string;
}

const selectData = [
  { value: 'Select input', option: 'Select input' },
  { value: 'value', option: 'option' },
  { value: 'value', option: 'option' },
  { value: 'value', option: 'option' },
  { value: 'value', option: 'option' },
  { value: 'value', option: 'option' },
];

// COMPONENT:=>
const Form: React.FC<FormProps> = ({ formHeading }) => {
  return (
    <Container>
      <section className="form">
        <div className="form-wrapper">
          <div className="form-header">
            <h3 className="heading">{formHeading}</h3>
          </div>
          <div className="inputs-wrapper">
            <form>
              <Row>
                <Col xs={12}>
                  <FormInput
                    inputType="text"
                    inputId="contact-name"
                    inputName="contact-name"
                    inputLabel="Contact name"
                    inputPlaceholder="Contact name"
                  />
                </Col>
                <Col xs={12}>
                  <FormInput
                    inputType="email"
                    inputId="email-address"
                    inputName="email-address"
                    inputLabel="Email address"
                    inputPlaceholder="Email address"
                    email
                  />
                </Col>
                <Col xs={12}>
                  <FormInput
                    inputType="select"
                    inputId="select-topic"
                    inputName="select-topic"
                    selectOptions={selectData}
                    selectInput={true}
                    selectWidth="100%"
                  />
                </Col>
                <Col xs={12}>
                  <FormInput
                    inputType="textarea"
                    inputId="contact-message"
                    inputName="contact-message"
                    inputLabel="Contact message"
                    inputPlaceholder="Message"
                    textArea={true}
                    textAreaRows={7}
                  />
                </Col>
                <Col xs={12}>
                  <FormInput
                    inputType="checkbox"
                    inputId="accepting-terms"
                    inputName="accepting-terms"
                    inputLabel="Access to special sales, pre-shop new designs + exclusive offers. Couch will protect your email address (read our privacy policy).
                    "
                    checkbox={true}
                  />
                </Col>

                {/* submit button */}
                <SudoButton>
                  <button type="submit" className="sudo-btn">
                    <span className="txt">{formHeading}</span>
                  </button>
                </SudoButton>
              </Row>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Form;
