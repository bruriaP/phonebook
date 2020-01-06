import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from '@material-ui/core/Button';
    import Bootstrap from "react-bootstrap";
    import "./Login.css";

    export default class Login extends Component {
      constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: ""
        };
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
      }

      render() {
        return (
          <div className="Login">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email" bsSize="large">
              <Form.Label>Email address</Form.Label>

                <Form.Control
                  autoFocus
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                
              </Form.Group>
              <Form.Group controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
              <br></br>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  
                />
                <br></br>
             
              </Form.Group>
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
              <br></br>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                label="Remmber Me" />
                </Form.Group>
            </Form>
          </div>
        );
      }
    }