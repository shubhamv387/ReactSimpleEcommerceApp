import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Col,
  Row,
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "react-bootstrap";

function App() {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Container className="mt-4" style={{ width: "45rem" }}>
      <Row className="d-flex g-5 justify-content-center align-items-center">
        {productsArr.map((product) => (
          <Col
            md="6"
            key={product.id}
            className="d-flex justify-content-center"
          >
            <Card style={{ width: "18rem" }}>
              <CardHeader className="d-flex gap-2 flex-column align-items-center">
                <h4>{product.title}</h4>
                <img
                  className="w-100"
                  src={product.imageUrl}
                  alt={product.title}
                />
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <p className="d-flex mb-0 fw-bold fs-5">$ {product.price}</p>
                <Button size="sm" variant="primary">
                  ADD TO CART
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
