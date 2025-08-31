import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Layout(){

    const state = useSelector(state => state);

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/cart'}>Cart-{state.cart.length}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

             { /* This renders HomePage or CartPage depending on the route */ }
            <Container>
             <Outlet />
            </Container>
            
        </>
    );
}

export default Layout;