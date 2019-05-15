import React from "react";
import { Col, Form, Input, FormGroup, Label, Button } from "reactstrap";

class Formulario extends React.Component {

    constructor() {
        super();
        this.campos = ["nome", "preco", "img", "categoria", "descricao"]
    }


    render = () => (
        <Form >
            {this.campos.map((titulo, i) => (
                <FormGroup row key={i}>
                    <Label for={titulo} sm={3}>{titulo}</Label>
                    <Col sm={9}>
                        <Input id={titulo} />
                    </Col>
                </FormGroup>
            ))}

            <Button>Adicionar Produto</Button>
        </Form>
    )
}

export default Formulario;