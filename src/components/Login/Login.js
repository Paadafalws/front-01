import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';


function Login() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Login"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
    </Navbar>
  );
}

export default Login;