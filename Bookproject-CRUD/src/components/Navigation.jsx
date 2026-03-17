import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="bg-dark">
                <Container fluid>
                    <Navbar.Brand> 
                       <a href="/"><img src="https://i.pinimg.com/736x/e9/e4/67/e9e4676d68157f9d52cf455d8512ed33.jpg" className='logo' alt="book logo" /></a> 
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto"
                        >
                            <Link to="/" className="nav-link text-white">Home</Link>
                            <Link to="/add" className="nav-link text-white">Add Book</Link>
                            <Link to="/viewBook" className="nav-link text-white">View Book</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* </Container> */}
        </>
    )
}
export default Navigation;