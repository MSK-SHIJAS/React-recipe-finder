import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegHeart } from "react-icons/fa";
import './index.css';
import { Outlet } from 'react-router-dom';
import { Link} from 'react-router-dom'

function Navbars() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='mt-3'>
        <Container>
          <Navbar.Brand href="/">RECIPE</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/allitems">ALL ITEMS</Nav.Link>
            <Nav.Link href="#pricing">FAVORITE</Nav.Link>
            <FaRegHeart className='mt-2'/>
            <Nav.Link as={Link} to="/country">COUNTRY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default Navbars;