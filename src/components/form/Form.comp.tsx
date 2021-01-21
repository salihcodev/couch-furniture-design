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
  input1: any;
  input2?: any;
  input3?: any;
  input4?: any;
  input5?: any;
  input6?: any;
  input7?: any;
  input8?: any;
  input9?: any;
  input10?: any;
  input11?: any;
  input12?: any;
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
const Form: React.FC<FormProps> = ({
  formHeading,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  input9,
  input10,
  input11,
  input12,
}) => {
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
                <Col xs={input1.xs}>
                  <FormInput
                    inputType="text"
                    inputId="contact-name"
                    inputName="contact-name"
                    inputLabel="Contact name"
                    inputPlaceholder="Contact name"
                  />
                </Col>
                <Col xs={input1.xs}>
                  <FormInput
                    inputType="email"
                    inputId="email-address"
                    inputName="email-address"
                    inputLabel="Email address"
                    inputPlaceholder="Email address"
                    email
                  />
                </Col>
                <Col xs={input1.xs}>
                  <FormInput
                    inputType="select"
                    inputId="select-topic"
                    inputName="select-topic"
                    selectOptions={selectData}
                    selectInput={true}
                    selectWidth="100%"
                  />
                </Col>
                <Col xs={input1.xs}>
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
                <Col xs={input1.xs}>
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
                <SudoButton
                  btnTxt={formHeading}
                  btnType="submit"
                  borderClr=""
                  borderW={0}
                  bkg="linear-gradient(45deg, rgba(0, 0, 0, 0.333), rgba(94, 122, 145, 0.6))"
                  clr="#fff"
                />
              </Row>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Form;
