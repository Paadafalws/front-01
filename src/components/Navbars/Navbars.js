
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function JustifiedExample() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <NavDropdown title="Configuração" id="basic-nav-dropdown" className="nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="dropdown-item">Agendamentos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="dropdown-item">
            Deslogar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="dropdown-item">Cadastro</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" className="dropdown-item">
            ETC
            </NavDropdown.Item>
            </NavDropdown>
      </Nav.Item>
    </Nav>
  );
}

export default JustifiedExample;