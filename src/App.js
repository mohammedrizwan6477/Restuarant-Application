import "./App.css";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import { Home } from "./Component/Home";
import { RestuarantUpdate } from "./Component/RestuarantUpdate";
import { RestuarantDetail } from "./Component/RestuarantDetail";
import { RestuarantCreate } from "./Component/RestuarantCreate";
import { RestuarantList } from "./Component/RestuarantList";
import { RestuarantSearch } from "./Component/RestuarantSearch";
import { Nav, Navbar, Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Resto</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link to="/"><NavLink className="navlink" to="/">Home</NavLink></Nav.Link>
                <Nav.Link href="#action2"><NavLink className="navlink" to="/list">List</NavLink></Nav.Link>
                <Nav.Link href="#action2"><NavLink className="navlink" to="/create">Create</NavLink></Nav.Link>
                <Nav.Link href="#action2"><NavLink className="navlink" to="/search">Search</NavLink></Nav.Link>
                <Nav.Link href="#action2"><NavLink className="navlink" to="/details">Details</NavLink></Nav.Link>
                <Nav.Link href="#action2"><NavLink className="navlink" to="/update">Update</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<RestuarantList />} />
          <Route path="/create" element={<RestuarantCreate />} />
          <Route path="/search" element={<RestuarantSearch />} />
          <Route path="/details" element={<RestuarantDetail />} />
          <Route path="/update" element={<RestuarantUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
