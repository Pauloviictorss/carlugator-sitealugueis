import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'



const Menu = () => {

  return (
    <div>
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ borderRadius: '20px', marginTop: '20px'}}>
          <Container>
          <Navbar.Brand className="btn btn-danger my-1" style={{height: '45px'}} href="/">Carlugator</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Alguel de Carros" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Esportivos</NavDropdown.Item>
                <NavDropdown.Item href="/">De passeio</NavDropdown.Item>
                <NavDropdown.Item href="/">SUV's</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Alguel de Motos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Street</NavDropdown.Item>
                <NavDropdown.Item href="/">Adventure</NavDropdown.Item>
                <NavDropdown.Item href="/">Sport</NavDropdown.Item>
                <NavDropdown.Item href="/">Off-Road</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Alguel de Barcos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                <NavDropdown.Item href="/">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#home">Minhas reservas</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/cadastro">Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />

    </div>
  )
}

export default Menu