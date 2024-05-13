import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import UsersServices from './../../../services/UsersServices';
import RolesServices from "../../../services/RolesServices";

const Signup = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetch = async () => {
      var _roles = [];
      var response = await RolesServices.get();
      response.data.map((role, index) => { index != 0 && _roles.push({ label: role.name, value: role.name }) });
      setRoles(_roles);
      console.log(_roles);
    }

    fetch();
  }, [])
  const { name, username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    // try {
      var response = await UsersServices.register(formData);
      toast.success(response.data, {
        position: toast.POSITION.TOP_CENTER
      });
      // Add any additional logic you want to perform after successful form submission
    // } catch (error) {
    //   toast.error('An error occurred. Please try again.', {
    //     position: toast.POSITION.TOP_CENTER
    //   });
    // }
  };

  return (
    <Fragment>
      <div className="page main-signin-wrapper">
        <ToastContainer />
        <Row className="signpages text-center">
          <Col md={12} className="col-md-12">
            <Card>
              <Row className="row-sm">
                <Col
                  lg={6}
                  xl={5}
                  className="d-none d-lg-block text-center bg-primary details"
                >
                  <div className="mt-5 pt-5 p-2 pos-absolute">
                    <div className="clearfix my-5"></div>
                    <img
                      src={require("../../../assets/img/svgs/user.svg").default}
                      className="ht-100 mb-0"
                      alt="user"
                    />
                    <h5 className="mt-4 text-white">Create Your Account</h5>
                    <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                      Signup to create, discover and connect with the global
                      community
                    </span>
                  </div>
                </Col>
                <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                  <Container fluid>
                    <Row className=" row-sm">
                      <Card.Body className="mt-2 mb-2">
                        <img
                          src={require("../../../assets/img/brand/logo.png")}
                          className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                          alt="logo"
                        />
                        <img
                          src={require("../../../assets/img/brand/logo-light.jpg")}
                          className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                          alt="logo"
                        />
                        <div className="clearfix"></div>
                        <h5 className="text-start mb-2">Signup</h5>
                        <p className="mb-4 text-muted tx-13 ms-0 text-start">
                          It's free to signup and only takes a minute.
                        </p>
                        <Form>
                          <Form.Group className="text-start form-group" controlId="fromName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              placeholder="Enter your Name"
                              type="text"
                              name="name"
                              value={name}
                              onChange={onChange}
                            />
                          </Form.Group>


                          <Form.Group className="text-start form-group" controlId="fromUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              placeholder="Choose a unique username"
                              type="text"
                              name="username"
                              value={username}
                              onChange={onChange}
                            />
                          </Form.Group>
                       
                          <Form.Group className="text-start form-group">
                            <Form.Label className="mg-b-10">Role</Form.Label>
                            <Select classNamePrefix="Select2"
                              closeMenuOnSelect={true}
                              value={selectedRoles}
                              onChange={setSelectedRoles}
                              // components={makeAnimated()}
                              name="role"
                              isMulti={false}
                              options={roles}
                            />
                          </Form.Group>
                          <Form.Group className="text-start form-group" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              placeholder="Enter your email"
                              type="email"
                              name="email"
                              value={email}
                              onChange={onChange}
                            />
                          </Form.Group>
                          <Form.Group className="text-start form-group" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              placeholder="Enter your password"
                              type="password"
                              name="password"
                              value={password}
                              onChange={onChange}
                            />
                          </Form.Group>

                          <button className="btn ripple btn-main-primary btn-block mt-2" type="submit" onClick={onSubmit}>
                            Create Account
                          </button>
                        </Form>
                        <div className="text-start mt-3 ms-0">
                          <p className="mb-0">
                            Already have an account?
                            <Link to={`${process.env.PUBLIC_URL}/authentication/login`}> SignIn</Link>
                          </p>
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
    </Fragment>
  )
};

export default Signup;
