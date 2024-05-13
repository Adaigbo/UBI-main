import React, { Fragment } from "react";
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
import { AccordionWizardForm } from "../../../data/ecommerce/checkout";
const Checkout = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">Checkout</h2>
        <Breadcrumb>
          <Breadcrumb.Item active>
            Checkout
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col xl={12}>
        <Card className="custom-card">
          <Card.Header className="bg-transparent border-bottom-0">
            <div>
              <label className="main-content-label mb-2">Checkout</label>
              <span className="d-block tx-12 mb-0 text-muted">
                The Project Budget is a tool used by project managers to
                estimate the total cost of a project
              </span>
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xl={6} className="col-xl-6 mx-auto">
                <div className="checkout-steps wrapper">
                  <div id="checkoutsteps">
                    <AccordionWizardForm />
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
