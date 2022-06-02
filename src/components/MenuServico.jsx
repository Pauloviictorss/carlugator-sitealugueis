import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Menu = () => {

  return (
    <div>
      
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" style={{ borderRadius: '20px', margin: '20px', backgroundColor: "rgba(0,0,0, 0.92)" }}>
          <Container fluid>
          <Navbar.Brand className="btn btn-danger my-1" style={{height: '55px'}} href="/">Carlugator</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link to={"/tipoanuncio"} className='nav-link btn-outline-danger btn m-2 text-light'>Inserir um anúncio</Link>
            </Nav>

            <Nav>
              <Link className="nav-link btn-outline-danger btn m-2 text-light" to="/meusanuncios">Meus anúncios</Link>
              <Link className="nav-link btn-danger btn m-2 text-light" to="/login">Login</Link>
              <Link className="nav-link btn-danger btn m-2 text-light" to="/cadastro">Cadastro</Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />

    </div>
  )
}

export default Menu