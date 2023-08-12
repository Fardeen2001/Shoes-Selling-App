import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { CartState } from "../../../Store/Context";

const AddShoeForm = () => {
  const titleRef = useRef("");
  const urlRef = useRef("");
  const priceRef = useRef("");
  const smallRef = useRef("");
  const mediumRef = useRef("");
  const largeRef = useRef("");
  const {
    state: { products },
  } = CartState();
  const submithandler = (e) => {
    e.preventDefault();
    const addedShoe = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      imageUrl: urlRef.current.value,
      smallquantity: smallRef.current.value,
      mediumquantity: mediumRef.current.value,
      largequantity: largeRef.current.value,
    };
    products.add(addedShoe);
  };
  return (
    <Container
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
        width: "70vw",
        height: "auto",
        marginTop: "70px",
      }}
    >
      <Form onSubmit={submithandler}>
        <h1 style={{ textAlign: "center" }}>ADD SHOES</h1>
        <Form.Group className="mb-3" controlId="formBasictitle">
          <Form.Label>Shoe title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" ref={titleRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicurl">
          <Form.Label>Shoe Image</Form.Label>
          <Form.Control type="text" placeholder="Enter url" ref={urlRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" ref={priceRef} />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={4} controlId="formGridsmall">
            <Form.Label>Small Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="small quantity"
              ref={smallRef}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={4} controlId="formGridmedium">
            <Form.Label>Medium Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="medium quantity"
              ref={mediumRef}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={4} controlId="formGridlarge">
            <Form.Label>Large Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="large quantity"
              ref={largeRef}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddShoeForm;
