import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  Container,
  Col,
  CardBody,
  Alert
} from "reactstrap";
import "./style.css";

export default function App() {
  const [direction, setDirection] = useState("Column");
  const [alignItem, setAlignItem] = useState("flex-start");
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <Container className="py-3">
      <Alert color="primary">
        <h2>Flex Layout Live Test</h2>
      </Alert>
      <Card>
        <CardBody>
          <Form>
            <FormGroup row>
              <Label sm={2} for="exampleSelect">
                Flex Direction
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Column</option>
                  <option>Row</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2} for="exampleSelect">
                Item Align
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2} for="exampleSelect">
                Justify Content
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      <div className="test-space my-5 py-5">
        <div className="child" />
        <div className="child" />
        <div className="child" />
      </div>
    </Container>
  );
}
