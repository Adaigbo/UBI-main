import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row, Alert, Container, Card } from 'react-bootstrap';
import AuthServices from '../services/AuthServices';
import Utils from '../utils/Utils';

const SignIn = () => {
  const [disabled, setDisabled] = useState(false);

  const [err, setError] = useState("");
  const [data, setData] = useState({ username: '', password: '' });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }

  const routeChange = () => {
    let path = `${process.env.PUBLIC_URL}/dashboard`;
    window.location.href = path;
  }

  const Login = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      let response = await AuthServices.login(data);
      localStorage.setItem('ubi_token', response.data.token);

      localStorage.setItem('ubi_user', JSON.stringify(response.data));
      console.log(response);

      Utils.Toast('success', 'Successfully loggedin!');
      routeChange();
    }
    catch (err) {
      console.log(err);
      setDisabled(false);
    }
  }

  return (
    <>
      <Fragment>
        {/* <!-- Row --> */}
        <div className="page main-signin-wrapper"
        >
          <Row className="signpages text-center" >
            <Col md={12}>
              <Card>
                <Row className="row-sm">
                  <Col
                    lg={6}
                    xl={5}
                    className="d-none d-lg-block text-center bg-primary details"
                  >
                    <div className="mt-5 pt-4 p-2 pos-absolute w-100">
                      <div className="clearfix my-5"></div>
                      <img
                        src={require("../assets/img/svgs/user.svg").default}
                        className="ht-100 mb-0"
                        alt="user"
                      />
                      <h5 className="mt-4 text-white">Login to Your Account</h5>
                    </div>
                  </Col>
                  <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                    <Container fluid>
                      <Row className="row-sm">
                        <Card.Body className="mt-2 mb-2">
                          <img
                            src={require("../assets/img/brand/logo.png")}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                            alt="logo"
                          />
                          <img
                            src={require("../assets/img/brand/logo-light.jpg")}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                            alt="logo"
                          />
                          <div className="clearfix"></div>
                          {err && <Alert variant="danger">{err}</Alert>}
                          <Form>
                            <h5 className="text-start mb-2">
                              Signin to Your Account
                            </h5>
                            <br /><br />
                            {/* <p className="mb-4 text-muted tx-13 ms-0 text-start">
                              Signin to create, discover and connect with the global
                              community
                            </p> */}
                            <Form.Group className="text-start form-group" controlId="formUsername">
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your Username"
                                name="username"
                                type='text'
                                value={data.username}
                                onChange={changeHandler}
                                required
                              />
                            </Form.Group>
                            <Form.Group
                              className="text-start form-group"
                              controlId="formpassword"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your password"
                                name="password"
                                type='password'
                                value={data.password}
                                onChange={changeHandler}
                                required
                              />
                            </Form.Group>
                            <Button onClick={Login} disabled={disabled} className="btn ripple btn-main-primary btn-block mt-2">
                              Sign In
                            </Button>
                          </Form>
                          <div className="text-start mt-5 ms-0">
                            <div>
                              © All Rights Reserved. Simpliance
                              <Link
                                to={`${process.env.PUBLIC_URL}/authentication/signup`}
                              > Register Here</Link>
                            </div>
                          </div>
                        </Card.Body>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>

        {/* <!-- End Row --> */}
      </Fragment>
    </>
  );
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
