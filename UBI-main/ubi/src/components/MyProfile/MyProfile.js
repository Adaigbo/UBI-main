import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Nav, Form, Col, Breadcrumb, Row, FormGroup, Card, Button } from "react-bootstrap";
import UsersServices from "../../services/UsersServices";
import Utils from "../../utils/Utils";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {

  const [me, setMe] = useState({});

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photo, setPhoto] = useState('');

  const [showCoverModal, setShowCoverModal] = useState(false);
  const [cover, setCover] = useState('');

  const [activeTab, setActiveTab] = useState();
  const { tab } = useParams();

  useEffect(() => {
    loadData();
    setActiveTab(tab ? tab : 'about');
    console.log(tab);
  }, []);

  const loadData = async () => {
    setLoading(true);

    const meResult = await UsersServices.me();
    setMe(meResult.data);

    setLoading(false);
  }

  const handleSubmitProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const jsonObject = Utils.formDataToJSON(formData);

    const result = await UsersServices.myUpdateProfile(jsonObject);
    Utils.Toast('success', result.message);
    window.location.reload();
  }

  const handleSubmitUsernameEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const jsonObject = Utils.formDataToJSON(formData);
    console.log(jsonObject)

    const result = await UsersServices.myUpdateUsernameEmail(jsonObject);

    Utils.Toast('success', result.message);
    window.location.reload();
  }

  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const jsonObject = Utils.formDataToJSON(formData);
    console.log(jsonObject)

    const result = await UsersServices.myUpdatePassword(jsonObject);

    Utils.Toast('success', result.message);
    e.target.reset();
  }

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Profile</h2>
          <Breadcrumb>
            <Breadcrumb.Item href={process.env.PUBLIC_URL}> Home </Breadcrumb.Item>
            <Breadcrumb.Item active>  Profile  </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      <Tab.Container
        id="center-tabs-example"
        activeKey={activeTab}
        onSelect={setActiveTab}
        className="bg-gray-100">
        <Row className="square">
          <div lg={12} md={12}>
            <Card className="custom-card">
              <Card.Body>
                <div className="panel profile-cover">
                  <div className="profile-cover__img">
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <AccountCircleIcon style={{ fontSize: '900%' }} />
                    </div>
                  </div>
                  <div className="profile-cover__action bg-img bg-center" style={me.cover ? {
                    backgroundImage: `url(` + process.env.REACT_APP_UPLOADS_PUBLIC_URL + 'users/' + me.cover + `)`,
                  } : {}}></div>
                  <div className="profile-tab tab-menu-heading">
                    <Nav variant="pills" className="p-3 bg-primary-transparent">
                      <Nav.Item>
                        <Nav.Link eventKey="about">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="settings">
                          Account Settings
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </Card.Body>
            </Card>

          </div>
        </Row>
        <Row className="row-sm">
          <Col md={12} lg={12}>
            <div className="card custom-card main-content-body-profile">
              <Tab.Content>


                <Tab.Pane eventKey="about">

                  <div
                    className="main-content-body tab-pane p-sm-4 p-0 border-top-0">
                    <div className="card-body border">

                      <Form method="post" onSubmit={handleSubmitProfile} className="form-horizontal">
                        {/* <div className="mb-4 main-content-label">Name</div> */}
                        <div className="mb-4 main-content-label">
                          Personal Information
                        </div>

                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label>Full Name</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="text"
                                placeholder="Full Name"
                                defaultValue={me.name}
                                required={true}
                                name="name"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >Role</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="text"
                                placeholder="Designation"
                                defaultValue={me?.role}
                                disabled={true}
                              />
                            </Col>
                          </Row>
                        </FormGroup>

                      </Form>
                      
                      <Form className="form-horizontal" onSubmit={handleSubmitUsernameEmail} data-select2-id="11">
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >Username</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="text"
                                placeholder="Username"
                                required={true}
                                defaultValue={me.username}
                                name="username"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >Email Address</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="email"
                                placeholder="Email"
                                required={true}
                                defaultValue={me.email}
                                name="email"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                      </Form>
                    </div>
                  </div>

                </Tab.Pane>

                <Tab.Pane eventKey="settings">
                  <div className="main-content-body tab-pane p-sm-4 p-0 border-top-0">
                    <div className="card-body border" data-select2-id="12">

                      <Form className="form-horizontal" onSubmit={handleSubmitPassword} data-select2-id="110">
                        <div className="mb-4 main-content-label">
                          Secuirity Settings
                        </div>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >Current Password</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="password"
                                placeholder="Current Password"
                                name="current_password"
                                required={true} />
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >New Password</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="password"
                                placeholder="New Password"
                                name="new_password"
                                required={true} />
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >Confirm Password</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="new_password_confirmation"
                                required={true} />
                            </Col>
                          </Row>
                        </FormGroup>

                        <div className="text-end">
                          <Button
                            disabled={disabled}
                            variant="primary"
                            type="submit"
                            className="text-center">
                            Update
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
