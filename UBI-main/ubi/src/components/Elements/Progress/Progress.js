import React, { Fragment, useState } from "react";
import { Breadcrumb, Button, Card, ProgressBar, Row, Col, Form, Collapse } from "react-bootstrap";
const now = 50;
const Progress = () => {
  const [BasicProgress, setBasicProgress] = useState(false);
  const [StripedProgress, setStripedProgress] = useState(false);
  const [ProgressSizes, setProgressSizes] = useState(false);
  const [ProgressLabel, setProgressLabel] = useState(false);
  const [AnimatedBars, setAnimatedBars] = useState(false);
  const [MultipleBars, setMultipleBars] = useState(false);
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Progress</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#" >
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Progress
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row row-sm">
        <Col xl={9} lg={12} className="col-xl-9 col-lg-12">
          <Card className=" custom-card" id="striped">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Striped Progress</h6>
                <p className="text-muted card-sub-title">
                  A basic progress in all different colors.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setStripedProgress(!StripedProgress)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar striped variant="primary" now={45} className="mg-b-20" />
                  <ProgressBar striped variant="secondary" now={55} className="mg-b-20" />
                  <ProgressBar striped variant="info" now={65} className="mg-b-20" />
                  <ProgressBar striped variant="warning" now={75} className="mg-b-20" />
                  <ProgressBar striped variant="success" now={85} className="mg-b-20" />
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="label">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Progress Label</h6>
                <p className="text-muted card-sub-title">
                  A basic progress in different sizes.
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar className="mg-b-10" now={50} label={`${now}%`} />
                  <br />
                  <ProgressBar className=" mg-b-10" variant="secondary" now={75} label={`${now}%`} />
                  <br />
                  <ProgressBar
                    className=" mg-b-10"
                    variant="info"
                    now={95}
                    label={`${now}%`}
                  />
                  <br />
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className=" custom-card" id="animate">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Animated Bars</h6>
                <p className="text-muted card-sub-title">
                  The striped gradient can also be animated. Add
                  <code>.progress-bar-animated</code> to
                  <code>.progress-bar</code> to animate the stripes right to left
                  via CSS3 animations.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setAnimatedBars(!AnimatedBars)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>

            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar animated now={45} className=" mg-b-10" />
                  <ProgressBar animated now={55} className=" mg-b-10" variant="secondary" />
                  <ProgressBar animated now={65} className=" mg-b-10" variant="info" />
                  <ProgressBar animated now={75} className="mg-b-10" variant="danger" />
                  <ProgressBar animated now={85} className=" mg-b-10" variant="warning" />
                  <ProgressBar animated now={95} className=" mg-b-10" variant="success" />
                </div>
                <Collapse in={AnimatedBars}>
                  <pre>
                    <code>
                      {
                        `
 <ProgressBar animated now={45} className=" mg-b-10" />
                  <ProgressBar animated now={55} className=" mg-b-10" variant="secondary" />
                  <ProgressBar animated now={65} className=" mg-b-10" variant="info" />
                  <ProgressBar animated now={75} className="mg-b-10" variant="danger" />
                  <ProgressBar animated now={85} className=" mg-b-10" variant="warning" />
                  <ProgressBar animated now={95} className=" mg-b-10" variant="success" />
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className=" custom-card">
              <div className="">
                <div className="p-3">
                  <h6>HTML Project</h6>
                  <div className="main-traffic-detail-item">
                    <div>
                      <span>Project status</span> <span>35%</span>
                    </div>

                    <ProgressBar className='xs' now={35} variant="primary"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Progress.propTypes = {};

Progress.defaultProps = {};

export default Progress;
