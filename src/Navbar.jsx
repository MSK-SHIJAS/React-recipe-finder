import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegHeart } from "react-icons/fa";
import './index.css';

function Navbars() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='mt-3'>
        <Container>
          <Navbar.Brand href="#home">RECIPE</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ALL ITEMS</Nav.Link>
            <Nav.Link href="#pricing">FAVORITE</Nav.Link>
            <FaRegHeart className='mt-2'/>
            <Nav.Link href="#pricing">COUNTRY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='mt-3'>
  <img src="rp.png" class="img-fluid w-100" alt="abhi"/>
  <p class="text fs-1 fw-bold">Find recipes for every occasion<br/>
   Cooking has never been easier</p>
   <input class="SEARCH btn btn-success rounded-piLl" type="submit" value="SEARCH"></input>
</div>



    </>
  );
}

export default Navbars;