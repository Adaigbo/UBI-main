import React, { Fragment } from "react";
import { Accordion, Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
const Faq = () => (
  <Fragment>
    {/* <!-- Page Header --> */}
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">FAQs</h2>
      </div>
    </div>
    {/* <!-- End Page Header --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col sm={12} md={12}>
        <Card className="custom-card accordion-faq">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Common Faqs</h6>
              <p className="text-muted card-sub-title">
                Most Common Frequently Asked Questions(FAQs):
              </p>
            </div>
            <div
              aria-multiselectable="true"
              className="accordion"
              id="accordion"
              role="tablist"
            >
              <Accordion>
                <Accordion.Item eventKey="0" id="headingOne">
                  <Accordion.Header>
                    1. What's the purpose of this platform?
                  </Accordion.Header>
                  <Accordion.Body>
                    Welcome to our revolutionary marketplace tailored for farmers, exporters, and
                    logistics professionals! Our platform serves as a nexus, bridging the gap between
                    growers and buyers while optimizing the transportation of agricultural goods. With
                    an intuitive interface and robust features, we're here to simplify the process of
                    selling produce, finding quality goods, and ensuring efficient logistics.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header id="headingTwo">
                    2. How does this benefit farmers?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our platform empowers farmers by providing them with a direct pathway to a wider market,
                    enabling them to secure fair prices for their bountiful harvests. Moreover, we offer a
                    wealth of resources and insights aimed at enhancing agricultural practices, ensuring
                    sustainable growth and prosperity for farming communities.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header id="headingThree">
                    3. Can I use this Plugins in Another Template?
                  </Accordion.Header>
                  <Accordion.Body>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header id="headingfour">
                    4. What's the export process like?
                  </Accordion.Header>
                  <Accordion.Body>
                    Exporters, embark on a streamlined journey towards global markets with
                    our platform as your trusted guide! Browse through an extensive selection
                    of products, effortlessly placing orders and forging valuable connections
                    with farmers. Our platform facilitates seamless communication and transparent
                    transactions, ensuring a smooth export experience from start to finish.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header id="headingfive">
                    5. What logistics services are offered?
                  </Accordion.Header>
                  <Accordion.Body>
                    Elevate your logistical endeavors with our esteemed partners, who specialize
                    in providing comprehensive transportation services for agricultural products.
                    From meticulous packaging to efficient storage and swift shipping, our logistics
                    experts are dedicated to delivering your goods to local and international
                    markets with unparalleled efficiency and reliability.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header id="headingsix">
                    6. Is the platform user-friendly?
                  </Accordion.Header>
                  <Accordion.Body>
                    Dive into a seamless user experience designed with your convenience in mind!
                    Our platform boasts an intuitive interface, enabling farmers, exporters, and
                    logistics professionals to navigate effortlessly. Whether you're listing
                    products or managing transactions, our user-friendly features ensure a smooth
                    and hassle-free experience for all users.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header id="headingsix">
                    7. How do I get paid?
                  </Accordion.Header>
                  <Accordion.Body>
                    Secure your earnings swiftly and seamlessly through our platform's streamlined
                    payment process! Upon the completion of a transaction, funds are promptly
                    transferred to your account, guaranteeing transparency and efficiency every
                    step of the way. Say goodbye to payment delays and hello to hassle-free
                    transactions with us!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header id="headingsix">
                    8. Can I track Order Status?
                  </Accordion.Header>
                  <Accordion.Body>
                    Stay informed and in control with our robust tracking features! Monitor
                    the status of your shipments, ensuring seamless coordination between all
                    parties involved. With our platform, you'll never lose
                    sight of your goods as they journey from farm to market.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header id="headingsix">
                    9. Is customer support available?
                  </Accordion.Header>
                  <Accordion.Body>
                  Rest assured, our dedicated customer support team is here to provide assistance 
                  whenever you need it! Whether you have questions, concerns, or require guidance,
                   simply reach out to us via email, phone, or our in-app messaging system. Your 
                   satisfaction is our priority, and we're committed to ensuring a seamless 
                   Fexperience for all users.
                    </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </Fragment>
);

Faq.propTypes = {};

Faq.defaultProps = {};

export default Faq;
