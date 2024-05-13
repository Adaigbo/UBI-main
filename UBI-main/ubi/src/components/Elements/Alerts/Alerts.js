import React, { Fragment, useState } from "react";
import { Alert, Row, Col, Breadcrumb, Button, Badge, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



import { initialList } from '../../../data/Alertsdata';
function Alerts() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  //Showcodealerts
  const [solidalert, setsolidalert] = useState(false);
  const [solid, setsolid] = useState(initialList);
  let handleRemovesolid = (id) => {
    const newList = solid.filter((list) => list.id !== id);
    setsolid(newList);
  }
  const solidalertcode = () => {
    if (solidalert === false) {
      setsolidalert(true)
    }
    else if (solidalert === true) {
      setsolidalert(false)
    }
  }


  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Alerts</h2>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item
              href="#">Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active >
              Alerts
            </Breadcrumb.Item>
          </Breadcrumb>

        </div>
      </div>
      {/* <!-- End Page Header --> */}
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" id="solid-alert">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Solid Colored Alerts
                </h6>
                <p className="text-muted card-sub-title">
                  Use one of the four required contextual classes.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => { solidalertcode() }}
                type="switch"

                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <React.Fragment>
                    {solid.map((item, k) => (
                      <React.Fragment key={k}>
                        <Alert
                          variant=""
                          className={`alert fade show alert-dismissible alert-solid-${item.variant}`}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            variant=""
                            type="button"
                            onClick={() => handleRemovesolid(item.id)}
                            className="btn-close"
                          >
                            <span aria-hidden="true">×</span>
                          </Button>
                        </Alert>
                      </React.Fragment>
                    ))}

                  </React.Fragment>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <div className="bg-white box-shadow custom-card card">
              {show1 ? (
                <div className="alert text-center fade show p-3">
                  <Button variant="default"
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setShow1(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                  <i className="fe fe-upload-cloud fs-50 text-success"></i>
                  <h5 className="mt-2 mb-1">Success !</h5>
                  <p className="mb-3 mb-3 tx-inverse">
                    Data Upload Successfully
                  </p>
                  <Link to="#" className="btn ripple btn-success">
                    Continue
                  </Link>
                </div>
              ) : null}
            </div>
            <div className="bg-white box-shadow custom-card card">
              {show2 ? (
                <div className="alert text-center fade show p-3">
                  <Button variant="default"
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setShow2(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                  <i className="fe fe-download-cloud fs-50 text-danger"></i>
                  <h5 className="mt-2 mb-1">Oops!</h5>
                  <p className="mb-3 mb-3 tx-inverse">Something went wrong</p>
                  <Link to="#" className="btn ripple btn-danger">
                    Try again
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
      
      
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <div className="col-xl-3 col-lg-12 d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <Card.Header className="custom-card-header border-bottom-0">
                <h6 className="main-content-label mb-0">Sales Summary</h6>
              </Card.Header>

              <Card.Body>
                <div className="border">
                  <div className="main-list-item p-3">
                    <div>
                      <h6>Total Revenue</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>$15,300</h5>
                    </div>
                  </div>
                  <div className="main-list-item p-3 border-top">
                    <div>
                      <h6>Total Tax</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>$1,625</h5>
                    </div>
                  </div>
                  <div className="main-list-item p-3 border-top">
                    <div>
                      <h6>Total Income</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>$55,897</h5>
                    </div>
                  </div>
                  <div className="main-list-item p-3 border-top">
                    <div>
                      <h6>Total Loss</h6>
                      <span>weekly profit</span>
                    </div>
                    <div>
                      <h5>20%</h5>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

      </Row>


      
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="text-wrap">
                <Badge bg="primary me-1" >Primary</Badge>
                <Badge bg="secondary  me-1">Secondary</Badge>
                <Badge bg="success  me-1">Success</Badge>
                <Badge bg="danger  me-1">Danger</Badge>
                <Badge bg="dark  me-1">Dark</Badge>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Body>

              <div className="text-wrap">
                <Badge pill bg="primary  me-1">
                  Primary
                </Badge>
                <Badge pill bg="info  me-1">
                  Info
                </Badge>
                <Badge pill bg="ligh  me-1t" text="dark">
                  Light
                </Badge>
                <Badge pill bg="dark  me-1">
                  Dark
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={3} className=" d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <div className="card-header border-bottom-0 custom-card-header">
                <h6 className="main-content-label mb-3">Project Status</h6>
              </div>

              <Card.Body>
                <div className="list d-flex align-items-center p-3">
                  <Stack spacing={2} direction="row">
                    <CircularProgress style={{ color: "#51d866", fontSize: '20px' }} variant="determinate" value={100} />
                  </Stack>

                  <div className="wrappe ms-3">
                    <h6 className="mb-1">Project Planning</h6>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 text-muted">
                          <i className="fas fa-check-circle me-2"></i>100%
                          Completed
                        </span>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center p-3">
                  <Stack spacing={2} direction="row">
                    <CircularProgress style={{ color: "#51d866", fontSize: '20px' }} variant="determinate" value={100} />
                  </Stack>
                  <div className="wrappe ms-3">
                    <h6 className="mb-1">Project Desiging</h6>
                    <div>
                      <div className="d-flex align-items-center">
                        <span className="mb-0 text-muted">
                          <i className="fas fa-check-circle me-2"></i>100%
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center p-3">

                  <Stack spacing={2} direction="row">
                    <CircularProgress style={{ color: "#53caed", fontSize: '20px' }} variant="determinate" value={75} />
                  </Stack>
                  <div className="wrappe ms-3">
                    <h6 className="mb-1">Project Development</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mb-0 text-muted">
                          <i className="fas fa-spinner me-2"></i>76% Progress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center  p-3">
                  <Stack spacing={2} direction="row">
                    <CircularProgress style={{ color: "#f16d75", fontSize: '20px' }} value={25} />
                  </Stack>
                  <div className="wrappe ms-3">
                    <h6 className="mb-1">Project Testing</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="mb-0 text-muted">
                          <i className="fas fa-info-circle me-2"></i>Waiting
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
 
    </Fragment>
  );
}

Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;






























