// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';
import SudoButton from '../sudo-button/SudoButton.comp';

// COMPONENTS:
import FormInput from '../form-input/FormInput.comp';

// INTERFACE:
interface SignUpFormProps {
  formHeading: string;
}

// COMPONENT:=>
const SignUpForm: React.FC<SignUpFormProps> = ({ formHeading }) => {
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
                <Col xs={12} md={6}>
                  <FormInput
                    inputType="text"
                    inputId="signup-first-name"
                    inputName="signup-first-name"
                    inputLabel="First name"
                    // inputPlaceholder="Email address"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <FormInput
                    inputType="text"
                    inputId="signup-last-name"
                    inputName="signup-last-name"
                    inputLabel="Last name"
                    // inputPlaceholder="Email address"
                  />
                </Col>
                <Col xs={12}>
                  <FormInput
                    inputType="email"
                    inputId="signup-email-address"
                    inputName="signup-email-address"
                    inputLabel="Email"
                    // inputPlaceholder="Email address"
                    email
                  />
                </Col>
                <Col xs={12}>
                  <FormInput
                    inputType="password"
                    inputId="signup-password"
                    inputName="signup-password"
                    inputLabel="Password"
                    // inputPlaceholder="Password name"
                  />
                </Col>
                {/* submit button */}
                <SudoButton>
                  <button type="submit" className="sudo-btn">
                    <span className="txt">In the bag</span>
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

export default SignUpForm;
