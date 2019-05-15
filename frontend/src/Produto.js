import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Produto extends React.Component {
    render = () => (
        <Col sm="4">
            <Card >
                <CardImg top src={this.props.img} />
                <CardBody>
                    <CardTitle>{this.props.nome}</CardTitle>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Produto;
