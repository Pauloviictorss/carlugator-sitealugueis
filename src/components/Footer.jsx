import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {

  return (
    <div>
      <Navbar style={{ width: '100%' }} bg="dark" variant="dark">
        <Nav className="m-auto">
          <Nav.Link href="/">Sobre a Carlugator</Nav.Link>
          <Nav.Link href="/">Fale conosco</Nav.Link>
          <Nav.Link href="/">Privacidade</Nav.Link>
        </Nav>

      </Navbar>
    </div>
  )
}

export default Footer