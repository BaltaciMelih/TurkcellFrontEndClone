import React, {useState} from "react";
import CategoryList from "../../components/categories/CategoryList";
import GameList from "../../components/games/GameList";
import Dropdown from "react-bootstrap/Dropdown";
import { Row, Col, Container } from "react-bootstrap";

function Games() {
  const [order, setOrder] = useState("A-Z");

  return (
    <Container className="pt-5" style={{ width: "90%" }}>
      <Row className=" w-100 d-flex flex-row justify-content-between">
        <Col className="col-12 col-md-4 p-2 ">
          <CategoryList />
        </Col>
        <Col className="col-12 col-md-7">
          <Dropdown className=" text-end">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {order}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={(e) => setOrder("A-Z")} href="#">
                A-Z
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => setOrder("Z-A")} href="#">
                Z-A
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <GameList order={order} />
        </Col>
      </Row>
    </Container>
  );
}

export default Games;
