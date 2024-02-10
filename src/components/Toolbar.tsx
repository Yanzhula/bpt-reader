import React, { ChangeEvent } from 'react';
import { useContext } from 'react';
import { SetTemplateContext } from '../contexts/TemplateContext';
import styled from 'styled-components';
import { readBptFile } from '../utils/BptFileReader';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyBar = styled.div`
    border-radius: 8px;
    padding: 1em;
    border: 1px solid gray;
`;

export const Toolbar: React.FC = () => {
    
    const setTemplate = useContext(SetTemplateContext);

    const onInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const fileList = event.target?.files;
        const bptFile = fileList?.item(0);

        if (!bptFile)
        {
            return;
        }

        readBptFile(bptFile)
            .then((template) => setTemplate(template))
            .catch(e => console.log(e))
        ;
    }

return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>.bpt file</Form.Label>
                <Form.Control type="file" size="sm" onChange={onInput} />
            </Form.Group>
        </Container>
      </Navbar>
    </Container>
  );


    return <MyBar>

        </MyBar>
    ;
};
