import React, { useState, useRef } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Container,
  Col,
  CardBody,
  Alert
} from "reactstrap";
import "./style.css";

export default function App() {
  const [attributeContent, setAttributeContent] = useState({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  });

  const onChangeFlexDirection = value => {
    setAttributeContent({
      ...attributeContent,
      flexDirection: value
    });
  };

  const onChangeAlignItems = value => {
    setAttributeContent({
      ...attributeContent,
      alignItems: value
    });
  };

  const onChangeJustifyContent = value => {
    setAttributeContent({
      ...attributeContent,
      justifyContent: value
    });
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
                  <option value="center" defaultValue>
                    Center
                  </option>
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
                  <option value="center" defaultValue>
                    Center
                  </option>
                  <option value="space-between">Space Between</option>
                  <option value="space-around">Space Around</option>
                  <option value="space-evenly">Space Evenly</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      <div className="test-space my-4 py-4" style={attributeContent}>
        <div className="child" />
        <div className="child" />
        <div className="child" />
      </div>
      <Alert color="secondary" className="my-4">
        <pre>{JSON.stringify(attributeContent)}</pre>
      </Alert>
    </Container>
  );
}
