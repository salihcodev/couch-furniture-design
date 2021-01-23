// BASIC:
import './style.sass';

// UTILITIES:
import { Container, Row, Col } from 'react-bootstrap';
import SudoButton from '../sudo-button/SudoButton.comp';

// COMPONENTS:
import FormInput from '../form-input/FormInput.comp';

// INTERFACE:
interface LoginFormProps {
  formHeading: string;
}

// COMPONENT:=>
const LoginForm: React.FC<LoginFormProps> = ({ formHeading }) => {
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
                    inputType="email"
                    inputId="login-email-address"
                    inputName="login-email-address"
                    inputLabel="Email"
                    email
                  />
                </Col>
                <Col xs={12}>
                  <FormInput
                    inputType="password"
                    inputId="login-password"
                    inputName="login-password"
                    inputLabel="Password"
                  />
                </Col>
                {/* submit button */}
                <SudoButton>
                  <button type="submit" className="sudo-btn">
                    <span className="txt">In the bag</span>i
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

export default LoginForm;
