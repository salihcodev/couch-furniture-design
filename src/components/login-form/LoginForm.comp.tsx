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
                {' '}
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

export default LoginForm;
