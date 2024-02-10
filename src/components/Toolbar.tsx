import React, { ChangeEvent } from "react";
import { useContext } from "react";
import { SetTemplateContext } from "../contexts/TemplateContext";
import { readBptFile } from "../utils/BptFileReader";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

const templates: Object = {
  invoice: "invoice",
    vacation: "vacation",
    bustrip:  "bustrip",
};

export const Toolbar: React.FC = () => {
  const setTemplate = useContext(SetTemplateContext);

  const onInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const fileList = event.target?.files;
    const bptFile = fileList?.item(0);

    if (!bptFile) {
      return;
    }

    readBptFile(bptFile)
      .then((template) => setTemplate(template))
      .catch((e) => console.log(e));
  };

  const onSelectDefault = (event: ChangeEvent<HTMLSelectElement>): void => {
    const fileName = event.target.value;

    if (!templates.hasOwnProperty(fileName)) {
      return;
    }

    fetch(`/uploads/${fileName}.bpt`).then((resp: Response) => {
      resp.blob().then((blob) => {
        const bptFile = new File([blob], "tpl.bpt");

        readBptFile(bptFile)
          .then((template) => setTemplate(template))
          .catch((e) => console.log(e));
      });
    });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Select
                aria-label="Choose standart template"
                onChange={onSelectDefault}
              >
                <option>Choose standart template</option>
                <option value="vacation">Vacation</option>
                <option value="bustrip">Business trip</option>
                <option value="invoice">Invoice</option>
              </Form.Select>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Text>Or upload .bpt file</InputGroup.Text>
                <Form.Control type="file" onChange={onInput} />
              </InputGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};
