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
  const [direction, setDirection] = useState("column");
  const [alignItem, setAlignItem] = useState("center");
  const [justifyContent, setJustifyContent] = useState("center");

  const onChangeFlexDirection = value => {
    setDirection(value);
  };

  const onChangeAlignItems = value => {
    setAlignItem(value);
  };

  const onChangeJustifyContent = value => {
    setJustifyContent(value);
  };

  return (
    <Container className="py-3">
      <Alert color="primary">
        <h2>Flex Layout Live Test</h2>
      </Alert>
      <Card>
        <CardBody>
          <Form>
            <FormGroup row>
              <Label sm={2}>Flex Direction</Label>
              <Col sm={10}>
                <Input
                  type="select"
                  onChange={event => onChangeFlexDirection(event.target.value)}
                >
                  <option value="column">Column</option>
                  <option value="row">Row</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Item Align</Label>
              <Col sm={10}>
                <Input
                  type="select"
                  onChange={event => onChangeAlignItems(event.target.value)}
                >
                  <option value="flex-start">Flex Start</option>
                  <option value="flex-end">Flex End</option>
                  <option value="center" selected>Center</option>
                  <option value="baseline">Baseline</option>
                  <option value="stretch">Stretch</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Justify Content</Label>
              <Col sm={10}>
                <Input
                  type="select"
                  onChange={event => onChangeJustifyContent(event.target.value)}
                >
                  <option value="flex-start">Flex Start</option>
                  <option value="flex-end">Flex End</option>
                  <option value="center" selected>Center</option>
                  <option value="space-between">Space Between</option>
                  <option value="space-around">Space Around</option>
                  <option value="space-evenly">Space Evenly</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      <div
        className="test-space my-4 py-4"
        style={{
          flexDirection: direction,
          alignItems: alignItem,
          justifyContent: justifyContent
        }}
      >
        <div className="child" />
        <div className="child" />
        <div className="child" />
      </div>
    </Container>
  );
}
