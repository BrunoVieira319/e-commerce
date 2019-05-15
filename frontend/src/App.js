import React, { Component } from 'react';
import { Row, Container, Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap';
import classnames from 'classnames';
import Produto from './Produto';
import Form from './Form';

class App extends Component {
    constructor() {
        super();
        this.state = {
            produtos: [],
            activeTab: '1'
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/produto', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
        }).then(response => response.clone().json())
            .then(dados => this.setState({produtos: dados.data}))
        console.log(this.state.produtos)
    }

    render = () => (
        <Container>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.setState({activeTab: '1'}) }}
                    >
                        Produtos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.setState({activeTab: '2'}) }}
                    >
                        Adicionar
                    </NavLink>
                </NavItem>
            </Nav>
            
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="2">
                    <Row>
                        <Form />
                    </Row>
                </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Row>
                        {this.state.produtos.map((p, i) => (
                            <Produto key={i}
                                nome={p.nome}
                                img={p.img}
                            />
                        ))}
                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    );
}

export default App;
