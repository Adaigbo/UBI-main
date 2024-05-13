import React, { Fragment, useEffect, useState } from "react";
import png14 from "../../../assets/img/pngs/14.png";
import png15 from "../../../assets/img/pngs/15.png";
import png16 from "../../../assets/img/pngs/16.png";
import png17 from "../../../assets/img/pngs/17.png";
import png18 from "../../../assets/img/pngs/18.png";
import png19 from "../../../assets/img/pngs/19.png";
import ReactApexChart from "react-apexcharts";
import * as edashboard from "../../../data/ecommerce/edashboard";
import { Breadcrumb, Card, Col, Row, Table, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardServices from "../../../services/dashboardServices";
import Utils from "../../../utils/Utils";


function ECDashboard() {
  const [data, setData] = useState();

  const ProductsDetails =
    [
      { Productid: "#C234", Productname: png14, Producttext: "Regular Backpack", Productcost: "$14,500", Total: "2,977", Status: "Available", Statustext: "primary", },
      { Productid: "#C389", Productname: png15, Producttext: "Women Pink Sandal", Productcost: "$30,000", Total: "678	", Status: "Limited", Statustext: "primary", },
      { Productid: "#C936", Productname: png16, Producttext: "Designer Flower Pot", Productcost: "$13,200", Total: "4,922	", Status: "Available", Statustext: "primary", },
      { Productid: "#C493", Productname: png17, Producttext: "Plastic Outdoor Chair", Productcost: "$14,500", Total: "1,234", Status: "Limited", Statustext: "primary", }, { Productid: "#C729", Productname: png18, Producttext: "Digital Smart Watch", Productcost: "$5,987", Total: "4,789", Status: "NoStock", Statustext: "primary  op-5", },
      { Productid: "#C529", Productname: png19, Producttext: "Apple iPhone", Productcost: "$11,987", Total: "938", Status: "Limited", Statustext: "primary", },
    ];
  useEffect(() => {

    const fetch = async () => {
      var _data = await DashboardServices.get();
      if (Utils.can("View Dashboard")) {
        setData(_data.data);
      }
    }

    fetch()
  }, []);

  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">
            Welcome To Dashboards
          </h2>
          <Breadcrumb>
            <Breadcrumb.Item active>
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {Utils.can("View Dashboard") &&
        <>
          <Row className="row-sm">
            <Col sm={12} md={6} lg={6} xl={3}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="card-order ">
                    <label className="main-content-label mb-3 pt-1">
                      Total Users
                    </label>
                    <h2 className="text-end card-item-icon card-icon">
                      <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                      <span className="font-weight-bold">{data?.totalUsers}</span>
                    </h2>
                    {/* <p className="mb-0 mt-4 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="card-order ">
                    <label className="main-content-label mb-3 pt-1">
                      Users in last 6 months
                    </label>
                    <h2 className="text-end card-item-icon card-icon">
                      <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                      <span className="font-weight-bold">{data?.user6mth}</span>
                    </h2>
                    {/* <p className="mb-0 mt-4 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="card-order">
                    <label className="main-content-label mb-3 pt-1">
                      Total Products
                    </label>
                    <h2 className="text-end">
                      <i className="mdi mdi-cube icon-size float-start text-primary"></i>
                      <span className="font-weight-bold">{data?.totalProducts}</span>
                    </h2>
                    {/* <p className="mb-0 mt-4 text-muted">
                  Monthly Income<span className="float-end">$7,893</span>
                </p> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="card-order">
                    <label className="main-content-label mb-3 pt-1">
                      Total Orders
                    </label>
                    <h2 className="text-end">
                      <i className="icon-size mdi mdi-poll-box   float-start text-primary"></i>
                      <span className="font-weight-bold">{data?.totalOrders}</span>
                    </h2>
                    {/* <p className="mb-0 mt-4 text-muted">
                  Monthly Profit<span className="float-end">$4,678</span>
                </p> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="card-order ">
                    <label className="main-content-label mb-3 pt-1">
                      Total Orders Pending
                    </label>
                    <h2 className="text-end card-item-icon card-icon">
                      <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                      <span className="font-weight-bold">{data?.unfulfiledOrders}</span>
                    </h2>
                    {/* <p className="mb-0 mt-4 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={6} xl={3}>
              <Card className="custom-card">
                <Card.Body>
                  <div className="card-order ">
                    <label className="main-content-label mb-3 pt-1">
                      Total Orders Fulfiled
                    </label>
                    <h2 className="text-end card-item-icon card-icon">
                      <i className="mdi mdi-account-multiple icon-size float-start text-primary"></i>
                      <span className="font-weight-bold">{data?.totalFulfiledOrders}</span>
                    </h2>
                    {/* <p className="mb-0 mt-4 text-muted">
                  Monthly users<span className="float-end">50%</span>
                </p> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="row-sm">
            <Card className="custom-card">
              <Card.Header className="border-bottom-0 pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Recent Orders
                </label>
                <p className="tx-12 mb-0 text-muted">
                  An order is an investor's instructions to a broker or brokerage
                  firm to purchase or sell
                </p>
              </Card.Header>
              <Card.Body className="sales-product-info pb-0">
                <div id="recentorders" className="">
                  <ReactApexChart
                    options={edashboard.radialbarchart.options}
                    series={[
                      (data && data.totalOrders !== undefined && data.totalOrders !== 0) // Check if data and totalOrders exist and not zero
                        ? [(data.totalFulfiledOrders / data.totalOrders) * 100] // Calculate percentage if totalOrders is not zero
                        : [0] // If totalOrders is zero or undefined, set the series to zero
                    ]}
                    type="radialBar"
                    height={270}
                  />
                </div>
                <div className="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p">
                  <div className="col-md-6 col justify-content-center text-center">
                    <p className="mb-0 d-flex justify-content-center ">
                      <span className="legend bg-primary brround"></span>Total orders
                    </p>
                    <h3 className="mb-1 font-weight-bold">{data?.totalOrders}</h3>
                    <div className="d-flex justify-content-center ">
                      <p className="text-muted ">Last 6 months</p>
                    </div>
                  </div>
                  <div className="col-md-6 col text-center float-end">
                    <p className="mb-0 d-flex justify-content-center ">
                      <span className="legend bg-light brround"></span>Not Fulfiled
                    </p>
                    <h3 className="mb-1 font-weight-bold">{data?.unfulfiledOrders}</h3>
                    <div className="d-flex justify-content-center ">
                      <p className="text-muted"></p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Row>

          <Row className="row-sm">
            <Card className="custom-card">
              <Card.Header className="border-bottom-0 pb-1">
                <label className="main-content-label mb-2 pt-1">
                  Sales Activity
                </label>
                <p className="tx-12 mb-0 text-muted">
                  Sales activities are the tactics that salespeople use to achieve
                  their goals and objective
                </p>
              </Card.Header>
              <div className="product-timeline card-body pt-3 mt-1">
                <ul className="timeline-1 mb-0">
                  <li className="mt-0">
                    <i className="ti-pie-chart product-icon"></i>
                    <span className="font-weight-semibold mb-4 tx-14 ">
                      Total Products
                    </span>
                    <Link to="#" className="float-end tx-11 text-muted">
                      ------------
                    </Link>
                    <p className="mb-0 text-muted tx-12">{data?.totalProducts} New Products</p>
                  </li>
                  <li className="mt-0">
                    <i className="mdi mdi-cart-outline product-icon"></i>
                    <span className="font-weight-semibold mb-4 tx-14 ">
                      Total Orders
                    </span>
                    <Link to="#" className="float-end tx-11 text-muted">
                      Last 6 months
                    </Link>
                    <p className="mb-0 text-muted tx-12">{data?.fulfiledOrders6mth + data?.pendingOrders6mth} New Orders</p>
                  </li>
                  <li className="mt-0 mb-0">
                    <i className="si si-eye product-icon"></i>
                    <span className="font-weight-semibold mb-4 tx-14 ">
                      Customer Visits
                    </span>
                    <Link to="#" className="float-end tx-11 text-muted">
                      Last 6 months
                    </Link>
                    <p className="mb-0 text-muted tx-12">
                      {data && data.user6mth !== undefined && data.totalUsers !== undefined && data.totalUsers !== 0
                        ? `${(data.user6mth / data.totalUsers * 100).toFixed(2)}% increased`
                        : 'Data unavailable'}
                    </p>
                  </li>
                </ul>
              </div>
            </Card>
            <Col sm={12}>
              <Card className=" custom-card overflow-hidden">
                <Card.Header className="border-bottom-0 d-flex">
                  <div>
                    <label className="main-content-label mb-2 pt-1">
                      Products Details
                    </label>
                    <p className="tx-12 mb-3 text-muted">
                      The details displayed often include size, color, price,
                      shipping information, reviews, and other relevant information
                      customers may want to know before making a purchase
                    </p>
                  </div>
                  {/* <Dropdown className="card-options float-end">
                <Dropdown.Toggle
                  className="me-0 text-default option-dots"
                  role="button"
                  variant="default"

                >
                  <span className="fe fe-more-vertical tx-17 float-end"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className=" dropdown-menu-end" role="menu" style={{ marginTop: "0px" }}>
                  <Dropdown.Item href="#">
                    <i className="fe fe-eye me-2"></i>View
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe-plus-circle me-2"></i>Add
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe-trash-2 me-2"></i>Remove
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe-settings me-2"></i>More
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
                </Card.Header >
                <Card.Body className="pt-0">
                  <div className="table-responsive">
                    <Table
                      className="table table-vcenter border mb-0 text-nowrap table-product">
                      <thead className="border-bottom">
                        <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Product Cost</th>
                          <th>Total</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.products.map((product, index) => (
                          <tr key={index} data-index={index}>
                            <td>{product.id}</td>
                            <td className="d-flex my-auto">
                              <span className="my-auto">{product.name}</span>
                            </td>
                            <td>
                              <b>${product.price}</b>
                            </td>
                            <td>{product.stock}</td>
                            <td>
                              <span className={`badge bg-${product.stock < 1 ? 'danger' : 'success'}`}>
                                {product.stock < 1 ? 'Out of Stock' : 'Available'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card >
            </Col >
            <Col sm={12}>
              <Card className=" custom-card overflow-hidden">
                <Card.Header className="border-bottom-0 d-flex">
                  <div>
                    <label className="main-content-label mb-2 pt-1">
                      Order Details
                    </label>
                    <p className="tx-12 mb-3 text-muted">
                      The details displayed often include size, color, price,
                      shipping information, reviews, and other relevant information
                      customers may want to know before making a purchase
                    </p>
                  </div>
                  {/* <Dropdown className="card-options float-end">
                <Dropdown.Toggle
                  className="me-0 text-default option-dots"
                  role="button"
                  variant="default"

                >
                  <span className="fe fe-more-vertical tx-17 float-end"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className=" dropdown-menu-end" role="menu" style={{ marginTop: "0px" }}>
                  <Dropdown.Item href="#">
                    <i className="fe fe-eye me-2"></i>View
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe-plus-circle me-2"></i>Add
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe-trash-2 me-2"></i>Remove
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <i className="fe fe-settings me-2"></i>More
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
                </Card.Header >
                <Card.Body className="pt-0">
                  <div className="table-responsive">
                    <Table
                      className="table table-vcenter border mb-0 text-nowrap table-product">
                      <thead className="border-bottom">
                        <tr>
                          <th>Order ID</th>
                          <th>Product ID</th>
                          <th>Quantity</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.orders.map((order, index) => (
                          <tr key={index} data-index={index}>
                            <td>{order.id}</td>
                            <td className="d-flex my-auto">
                              <span className="my-auto">{order.product}</span>
                            </td>
                            <td>{order.amount}</td>
                            <td>
                              <span className={`badge bg-${order.fulfiled ? 'success' : 'danger'}`}>
                                {order.fulfiled ? 'Fulfiled' : 'Not Fulfiled'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card >
            </Col >
          </Row >
        </>
      }
    </Fragment >
  );
}

ECDashboard.propTypes = {};

ECDashboard.defaultProps = {};

export default ECDashboard;
