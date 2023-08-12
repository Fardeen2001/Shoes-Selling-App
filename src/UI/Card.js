import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartState } from "../Store/Context";

const ItemCard = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Card style={{ width: "18rem" }} key={props.id}>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.des}</Card.Text>
        <Card.Title>Rs.{props.price}</Card.Title>
        <Container className="d-flex flex-column">
          {cart.some((p) => p.id === props.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE", payload: props.id });
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <>
              <Button
                variant="primary"
                className="p2 m-2"
                disabled={props.small === 0}
                onClick={() => {
                  dispatch({ type: "ADD-TO-CART", payload: props.item });
                }}
              >
                {props.small === 0
                  ? "Out of Stock"
                  : `Buy Small ${props.small}`}
              </Button>
              <Button
                variant="primary"
                className="p2 m-2"
                disabled={props.medium === 0}
                onClick={() => {
                  dispatch({ type: "ADD-TO-CART", payload: props.item });
                }}
              >
                {props.medium === 0
                  ? "Out of Stock"
                  : `Buy Medium ${props.medium}`}
              </Button>
              <Button
                variant="primary"
                className="p2 m-2"
                disabled={props.large === 0}
                onClick={() => {
                  dispatch({ type: "ADD-TO-CART", payload: props.item });
                }}
              >
                {props.large === 0
                  ? "Out of Stock"
                  : `Buy Large ${props.large}`}
              </Button>
            </>
          )}
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
