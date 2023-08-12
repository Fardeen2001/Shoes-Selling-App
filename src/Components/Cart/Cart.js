import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CartState } from "../../Store/Context";
import ListGroup from "react-bootstrap/ListGroup";
const Cart = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + +curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <h4>Your Cart is Empty</h4>
        ) : (
          <>
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item className="d-flex flex-direction-row justify-content-between">
                  <span>
                    <img
                      src={item.url}
                      alt={item.title}
                      height="40px"
                      width="40px"
                    />
                  </span>
                  <h5>{item.title}</h5>
                  <h5>{item.price}</h5>
                  <label htmlFor="qty"></label>
                  <input
                    id="qty"
                    type="number"
                    style={{ width: 35 }}
                    value={item.qty}
                    min="1"
                    onChange={(e) => {
                      dispatch({
                        type: "ADD-QUANTITY",
                        payload: {
                          id: item.id,
                          qty: e.target.value,
                        },
                      });
                    }}
                  />

                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({ type: "REMOVE-FROM-CART", payload: item });
                    }}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <h3>Total cart value: {total}</h3>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
