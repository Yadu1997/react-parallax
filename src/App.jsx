import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import { Parallax } from 'react-parallax'
import image1 from "./assets/Image1.jpg"
import image2 from "./assets/Image2.jpg"
import image3 from "./assets/Image3.jpg"
import ImageSlider from './Components/ImageSlider'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <div>
      <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container fluid>
        <Navbar.Brand className='fw-bolder fs-2' href="#">Parallax <span className='text-danger'>Scroll</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto mx-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <div className='d-md-flex'>
              <Nav.Link className='nav1 fw-bolder fs-5 text-success me-5 active' >Home</Nav.Link>
              <Nav.Link className='nav1 fw-bolder fs-5 text-success' href='#contact' >Contact</Nav.Link>
           </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

      <div>
        <Parallax strength={600} bgImage={image1}>
          <div className="content d-flex align-items-center justify-content-center">
            <h1 style={{fontSize:"100px"}}>Simple Parallax</h1>
          </div>
        </Parallax>
        <Parallax strength={-300} bgImage={image2}>
          <div className="content d-flex align-items-center justify-content-center">
            <h1 style={{fontSize:"100px"}}>Reverse Parallax</h1>
          </div>
        </Parallax>
        <Parallax strength={300} blur={{min: -5,max: 15}} bgImage={image3}>
          <div className="content d-flex align-items-center justify-content-center">
            <h1 style={{fontSize:"100px"}}>Blur Parallax</h1>
          </div>
        </Parallax>

      </div>
        <ImageSlider/>
        <Footer/>
    </>
  )
}

export default App
