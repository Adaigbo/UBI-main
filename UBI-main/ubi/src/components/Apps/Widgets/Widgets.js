import React, { Fragment } from "react";
import { ProgressBar, Badge, Breadcrumb, Button, Row, Col, Card, Table, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Visitors } from "../../../data/widgets";


function Widgets() {
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Widgets</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#" >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Widgets
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button
              variant="white"
              type="button"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button
              variant="white"
              type="button"
              className=" btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button
              type="button"
              variant="primary"
              className=" my-2 btn-icon-text"
            >
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                <i className="fe fe-user"></i>
              </div>
              <p className="mb-1 text-muted">Total Users</p>
              <h3 className="mb-0">34,789</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-secondary-transparent rounded-circle text-secondary">
                <i className="fe fe-trending-up"></i>
              </div>
              <p className="mb-1 text-muted">Total Sales</p>
              <h3 className="mb-0">98,674</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-info-transparent rounded-circle text-info">
                <i className="fe fe-dollar-sign"></i>
              </div>
              <p className="mb-1 text-muted">Total Profits</p>
              <h3 className="mb-0">
                <span>$</span>45,078
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <div className="icon-service bg-success-transparent rounded-circle text-success">
                <i className="fe fe-shopping-cart"></i>
              </div>
              <p className="mb-1 text-muted">Total Orders</p>
              <h3 className="mb-0">35,897</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={6} lg={6} xl={6}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order ">
                <label className="main-content-label mb-3 pt-1">
                  New Users
                </label>
                <h2 className="text-end card-item-icon card-icon">
                  <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                  <span className="font-weight-bold">3,672</span>
                </h2>
                <p className="mb-0 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col sm={12} md={6} lg={6} xl={6}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-widget">
                <label className="main-content-label mb-3 pt-1">
                  Total Profit
                </label>
                <h2 className="text-end">
                  <i className="icon-size mdi mdi-poll-box   float-start text-primary"></i>
                  <span className="font-weight-bold">$23,987</span>
                </h2>
                <p className="mb-0 text-muted">
                  Monthly Profit<span className="float-end">$4,678</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={8} >
          <Row className="row-sm">
            <Col lg={12}>
              <Card className="custom-card">
                <Row className="row-sm">
                  <Col sm={6} lg={6} className="border-end">
                    <Card.Body className="iconfont text-center">
                      <h6 className="">Total Cost Reduction</h6>
                      <h2 className="mt-1">$23,567</h2>
                      <p className="text-muted">
                        <span className="text-purple">
                          <i className="fa fa-arrow-up text-success me-1"> </i>
                          23%
                        </span>
                        in this year
                      </p>
                      <div className="progress progress-sm mb-0">
                        <ProgressBar
                          className=" wd-100p"
                          striped
                          variant="success"
                          now={60}
                        ></ProgressBar>
                      </div>
                    </Card.Body>
                  </Col>
                  <Col sm={6} lg={6}>
                    <Card.Body className="iconfont text-center">
                      <h6>Total Cost Savings</h6>
                      <h2 className="mt-1">15.2%</h2>
                      <p className="text-muted">
                        <span>
                          <i className="fa fa-arrow-down text-danger me-1"> </i>
                          12%
                        </span>
                        in this year
                      </p>
                      <div className="progress progress-sm mb-0">
                        <ProgressBar
                          className=" wd-100p"
                          striped
                          variant="danger"
                          now={80}
                        ></ProgressBar>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={6} sm={12} xl={4} >
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0 pb-0 d-flex ps-3 ms-1">
              <div>
                <label className="main-content-label mb-2">
                  Top Ongoing Projects
                </label>
                <span className="d-block tx-12 mb-2 text-muted">
                  Projects where development work is on completion
                </span>
              </div>
            </Card.Header>
            <Card.Body className="pt-2 mt-0">
              <ListGroup className="projects-list" >
                <ListGroup.Item action
                  className="flex-column align-items-start p-3"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold ">PSD Projects</h6>
                    <small className="text-danger">
                      <i className="fa fa-caret-down me-1"></i>5 days ago
                    </small>
                  </div>
                  <p className="mb-0 text-muted mb-0 tx-12">
                    Started:17-02-2020
                  </p>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
                  </small>
                </ListGroup.Item>
                <ListGroup.Item action
                  className="flex-column align-items-start p-3"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold">
                      Wordpress Projects
                    </h6>
                    <small className="text-success">
                      <i className="fa fa-caret-up me-1"></i>2 days ago
                    </small>
                  </div>
                  <p className="mb-0 text-muted mb-0 tx-12">
                    Started:15-02-2020
                  </p>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
                  </small>
                </ListGroup.Item>
                <ListGroup.Item action
                  className="flex-column align-items-start p-3"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold">
                      HTML &amp; CSS3 Projects
                    </h6>
                    <small className="text-danger">
                      <i className="fa fa-caret-down me-1"></i>1 days ago
                    </small>
                  </div>
                  <p className="mb-0 text-muted mb-0 tx-12">
                    Started:26-02-2020
                  </p>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
                  </small>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row --> */}
    </Fragment>
  );
}

Widgets.propTypes = {};

Widgets.defaultProps = {};

export default Widgets;
