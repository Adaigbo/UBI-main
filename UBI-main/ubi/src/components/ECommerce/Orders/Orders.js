import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
import { Orderdatatable } from "../../../data/ecommerce/orders";
import OrderServices from "../../../services/OrderServices";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      var _orders = await OrderServices.get();
      setOrders(_orders.data);
    }

    fetch();
  }, [])

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Orders</h2>
          <Breadcrumb>
            <Breadcrumb.Item active>
              Orders
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className=" custom-card">
            <Card.Header className=" border-bottom-0 pb-0">
              <div>
                <div className="d-flex">
                  <label className="main-content-label my-auto pt-2">
                    All Orders
                  </label>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Row className="table-filter">
                <Col lg={3}>
                </Col>
                <Col lg={9} className="d-lg-flex">
                  <div className="d-flex ms-auto mt-4 me-4 mt-lg-0"></div>
                  <div className="d-flex mt-4 mt-lg-0">
                    <div className="filter-group"></div>
                  </div>
                </Col>
              </Row>
              <Orderdatatable orders={orders} />


            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Orders.propTypes = {};

Orders.defaultProps = {};

export default Orders;
