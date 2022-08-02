import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import Rating from "./Rating";
import { CartState } from "../context/Context";
const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img src={prod.image} variant="top" alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${prod.age}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Delivery in 4 days</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod });
              }}
            >
              {!prod.inStock ? "out of stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
