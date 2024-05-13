import React, { Fragment, useState } from "react";
import { Breadcrumb, Button, Col, Pagination, Row, Card, Nav, Form, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
let active = 0;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
const Paginations = () => {
  const [BasicPagination, setBasicPagination] = useState(false);
  const [PaginationwithIcons, setPaginationwithIcons] = useState(false);
  const [Disabledp, setDisabledp] = useState(false);
  const [PaginationSizes, setPaginationSizes] = useState(false);
  const [CircledPagination1, setCircledPagination1] = useState(false);
  const [CircledPaginationStyle2, setCircledPaginationStyle2] = useState(false);
  const [RadiusPagination, setRadiusPagination] = useState(false);
  const [AlignmentPagination, setAlignmentPagination] = useState(false);
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Pagination</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Pagination
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card overflow-hidden" id="disactive">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Disabled and active Pagination
                </h6>
                <p className="text-muted card-sub-title">
                  Pagination links are customizable for different circumstances.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDisabledp(!Disabledp)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <nav>
                    <Pagination className="mb-0">
                      <Pagination.Item>Previous</Pagination.Item>
                      <Pagination.Item className="page-item" disabled>
                        {1}
                      </Pagination.Item>
                      <Pagination.Item className="page-item" active>
                        {2}
                      </Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Item>Next</Pagination.Item>
                    </Pagination>
                  </nav>
                </div>
              </div>

            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden" id="circled">
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Pagination className="pagination-circled mb-0">
                    <Pagination.Item>
                      <i className="icon ion-ios-arrow-back"></i>
                    </Pagination.Item>
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item className="page-item">{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>
                      <i className="icon ion-ios-arrow-forward"></i>
                    </Pagination.Item>
                  </Pagination>
                </div>
              </div>

             </Card.Body>
          </Card>
          <div
            className="card custom-card overflow-hidden"
            id="radius-pagination">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Radius Pagination</h6>
                <p className="text-muted card-sub-title">
                  Below are basic pagination navigation in border-radius.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setRadiusPagination(!RadiusPagination)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm">
                    <Pagination className=" pagination-radius mb-0 ms-lg-3">
                      <Pagination.Item>
                        <i className="fas fa-angle-double-left"></i>
                      </Pagination.Item>
                      <Pagination.Item active>{1}</Pagination.Item>
                      <Pagination.Item className="page-item">{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Item>{4}</Pagination.Item>
                      <Pagination.Item>
                        <i className="fas fa-angle-double-right"></i>
                      </Pagination.Item>
                    </Pagination>
                  </Row>
                </div>
              </div>

            </Card.Body>
          </div>
        </Col>
        <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card our-team">
              <Card.Body>
                <div className="picture avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={require("../../../assets/img/users/6.jpg")} />
                </div>
                <div className="text-center mt-3">
                  <h5 className="pro-user-username text-dark mt-2 mb-0">
                    Joyce Chua
                  </h5>
                  <p className="pro-user-desc text-muted mb-1">App Developer</p>
                  <p className="user-info-rating">
                    <Link to="#">
                      <i className="fa fa-star text-warning"> </i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-warning"> </i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-warning"> </i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-warning"> </i>
                    </Link>
                    <Link to="#">
                      <i className="far fa-star text-warning"> </i>
                    </Link>
                  </p>
                </div>
                <div className="contact-info mb-0 text-center">
                  <Link to="#" className="contact-icon border text-primary">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" className="contact-icon border text-primary">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#" className="contact-icon border text-primary">
                    <i className="fab fa-google"></i>
                  </Link>
                  <Link to="#" className="contact-icon border text-primary">
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Paginations.propTypes = {};

Paginations.defaultProps = {};

export default Paginations;
