import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from 'react-select';
import { Button, Col, Form, Row, Alert, Card, Container } from "react-bootstrap";
import RolesServices from "../services/RolesServices";
import UsersServices from "../services/UsersServices";
import Utils from "../utils/Utils";

const SignUp = () => {
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const _roles = [];
        const response = await RolesServices.get();
        if (Array.isArray(response.data)) {
          response.data.map((role, index) => index != 0 && _roles.push({ label: role.name, value: role.name }));
          setRoles(_roles);
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    const response = await UsersServices.register(data);
    Utils.Toast('success', 'Account Successfully Created!');
    navigate("/ubi");
  };

  const navigate = useNavigate();

  return (
    <div className="page main-signin-wrapper">
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
                  <img
                    src={require("../assets/img/brand/logo-light.jpg")}
                    className="header-brand-img mb-4"
                    alt="logo"
                  />
                  <div className="clearfix"></div>
                  <img
                    src={require("../assets/img/svgs/user.svg").default}
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
                      <h5 className="text-start mb-2">Signup</h5>
                      <p className="mb-4 text-muted tx-13 ms-0 text-start">
                        It's free to signup and only takes a minute.
                      </p>
                      <Form>
                        <Form.Group
                          className="text-start form-group"
                          controlId="fromName"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            className="form-control"
                            placeholder="Enter your firstname and lastname"
                            type="text"
                            name="name"
                            required
                            value={data.name}
                            onChange={changeHandler}
                          />
                        </Form.Group>
                        <Form.Group
                          className="text-start form-group"
                          controlId="fromUsername"
                        >
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            className="form-control"
                            placeholder="Select unique username"
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={changeHandler}
                          />
                        </Form.Group>
                        <Form.Group className="text-start form-group">
                          <Form.Label className="mg-b-10">Role</Form.Label>
                          <Select
                            classNamePrefix="Select2"
                            closeMenuOnSelect={true}
                            value={roles.find(role => role.value === data.role)}
                            onChange={(selectedOption) => setData({ ...data, role: selectedOption.value })}
                            isMulti={false}
                            options={roles}
                          />
                        </Form.Group>
                        <Form.Group
                          className="text-start form-group"
                          controlId="formEmail"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            className="form-control"
                            placeholder="Enter your email"
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={changeHandler}
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
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={changeHandler}
                          />
                        </Form.Group>

                        <Button
                          onClick={signup}
                          className="btn ripple btn-main-primary btn-block mt-1"
                        >
                          Create Account
                        </Button>
                      </Form>
                      <div className="text-start mt-3 ms-0">
                        <p className="mb-0">
                          Already have an account?
                          <Link to="/authentication/login"> SignIn</Link>
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
  );
};

export default SignUp;
