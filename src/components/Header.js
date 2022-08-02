import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  Container,
  Nav,
  Navbar,
  Badge,
  Dropdown,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>Shoping Cart</Navbar.Brand>
        {/* <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search a product"
            className="m-auto"
          />
        </Navbar.Text> */}

        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>${prod.age}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: "prod",
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Button,
//   Form,
//   Container,
//   Nav,
//   Navbar,
//   NavDropdown,
//   FormControl,
// } from "react-bootstrap";

// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./style.css";
// import { CartState } from "../context/Context";
// import { AiFillDelete } from "react-icons/ai";

// const Header = () => {
//   const navDropdownTitle = <FaShoppingCart> Dropdown </FaShoppingCart>;
//   const {
//     state: { cart },
//     dispatch,
//   } = CartState();
//   return (
//     <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
//       <Container>
//         <Navbar.Brand>Shoping Cart</Navbar.Brand>
//         {/* <Navbar.Text className="search">
//           <FormControl
//             style={{ width: 500 }}
//             placeholder="search a product"
//             className="m-auto"
//           />
//         </Navbar.Text> */}

//         <Nav className="me-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//         </Nav>
//         <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//           <Button variant="outline-success">Search</Button>
//         </Form>
//         <Nav>
//           <h6>{cart.length}</h6>
//           <NavDropdown
//             className="drop"
//             title={navDropdownTitle}
//             eventkey={3}
//             id="basic-nav-dropdown"
//             value="2"
//           >
//             <NavDropdown.Item style={{ minWidth: 370 }}>
//               {cart.length > 0 ? (
//                 <>
//                   {cart.map((prod) => {
//                     <span className="cartItem" key={prod.id}>
//                       <img
//                         src={prod.image}
//                         alt={prod.name}
//                         className="cartItemImg"
//                       />
//                       <div className="cartItemDetail">
//                         <span>{prod.name}</span>
//                         <span>${prod.age}</span>
//                       </div>
//                       <AiFillDelete
//                         fontSize="20px"
//                         style={{ cursor: "pointer" }}
//                         onClick={() =>
//                           dispatch({
//                             type: "REMOVE_FROM_CART",
//                             payload: "prod",
//                           })
//                         }
//                       />
//                     </span>;
//                   })}
//                   <Link to="/cart">
//                     <Button style={{ width: "95%", margin: "0 10px" }}>
//                       Go To Cart
//                     </Button>
//                   </Link>
//                 </>
//               ) : (
//                 <span style={{ padding: 10 }}>Cart is empty</span>
//               )}
//             </NavDropdown.Item>

//           </NavDropdown>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
