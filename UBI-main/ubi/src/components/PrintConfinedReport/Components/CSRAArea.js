import React, { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Functions from "../Utils/Functions";

const CSRAArea = ({ structure }) => {

    return (
        <Fragment>

            <Card className="custom-card mb-0 overflow-visible avoid-split">
                <Card.Body className="p-2 mx-1 border mb-2 fs-12">
                    <div className="d-flex">
                        <div className="w-100">
                            <>
                                <div className="d-flex">
                                    <p className={"fw-bold m-0 " + (Functions.isRestrictedAccess(structure) ? "text-info" : "text-danger")}>
                                        {structure.title} ({structure.code})
                                    </p>
                                </div>
                                {structure?.confined_tasks?.map((task, index2) => (

                                    <Fragment key={index2}>
                                        <div className="my-1 d-flex">
                                            <strong className="me-1">{task.task}</strong>
                                        </div>
                                        <p className="m-0 d-flex">
                                            <b className="min-wd-75"><i className="fe fe-user text-primary fw-bold"></i> Person: </b>
                                            <span>{task.person}</span>
                                        </p>
                                        {(Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'A') !== false || Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'C') !== false || Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 1) !== false || Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'E') !== false || Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'F') !== false) &&
                                            <p className="m-0 d-flex">
                                                <b className="min-wd-75"><i className="fe fw-bold fe-alert-triangle text-warning"></i> Hazard: <br /> <small>(operational)</small> </b>
                                                <span>
                                                    {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'A') !== false &&
                                                        <>
                                                            <strong>Part/Full Enclosed:</strong> {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'A')}<br />
                                                        </>
                                                    }
                                                    {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'C') !== false &&
                                                        <>
                                                            <strong>Sub-Oxygen Range:</strong> {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'C')}<br />
                                                        </>
                                                    }
                                                    {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 1) !== false &&
                                                        <>
                                                            <strong>Airborne Impairment:</strong> {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 1)}<br />
                                                        </>
                                                    }
                                                    {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'E') !== false &&
                                                        <>
                                                            <strong>Airborne Cont. Flammable:</strong> {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'E')}<br />
                                                        </>
                                                    }
                                                    {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'F') !== false &&
                                                        <>
                                                            <strong>Sub-Oxygen Range:</strong> {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'F')}<br />
                                                        </>
                                                    }
                                                </span>
                                            </p>
                                        }
                                        {(Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 2) !== false || Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 3) !== false) &&
                                            <p className="m-0 d-flex">
                                                <b className="min-wd-75"><i className="fe fw-bold fe-alert-triangle text-warning"></i> Hazard: <br /> <small>(introduced)</small> </b>
                                                <span>
                                                    {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 2) !== false &&
                                                        <>
                                                            <strong>Foreign Contaminant Hazard:</strong> {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 2)}<br />
                                                        </>
                                                    }
                                                    {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 3) !== false &&
                                                        <>
                                                            <strong>Task Emissions Hazard:</strong> {Functions.getHazardTextByCriteriaLetter(task.confined_task_hazards, 'D', 3)}<br />
                                                        </>
                                                    }
                                                </span>
                                            </p>
                                        }
                                        <p className="m-0 d-flex">
                                            <b className="min-wd-75"><i className="fe fe-check text-success fw-bold"></i> Control:</b>
                                            <span>{task.control}</span>
                                        </p>
                                        <p className="m-0 d-flex">
                                            <span className="min-wd-75">
                                                &nbsp;
                                                <img
                                                    src={require("../../../assets/img/risk-icon.png")}
                                                    className="wd-10 me-1"
                                                    alt="Risk"
                                                />
                                                <b>Risk:</b>
                                            </span>
                                            <span>
                                                Inherent: <span className={"text-" + task.inherent_risk_obj.class}>{task.inherent_risk_obj.label} ({task.inherent_risk})</span> &nbsp;
                                                Residual: <span className={"text-" + task.residual_risk_obj.class}>{task.residual_risk_obj.label} ({task.residual_risk})</span>
                                            </span>
                                        </p>

                                    </Fragment>
                                ))}

                                <Row>
                                    {structure.confined_structure_images.map((image, index3) => (

                                        <Fragment key={index3}>
                                            <Col lg={6} className="mt-3 max-wd-280">
                                                <div className="w-100 ht-200 bg-size-contain bg-repeat-no bg-center bg-light" style={{
                                                    backgroundImage: `url(` + process.env.REACT_APP_UPLOADS_PUBLIC_URL + 'confined_structure_images/' + image.image + `)`,
                                                }}></div>

                                                <p className="m-0 d-flex mt-1">
                                                    <b className="min-wd-10"><i className="fe fe-map-pin fw-bold"></i> </b>
                                                    <span>
                                                        #{Functions.isRestrictedAccess(structure) ? 'RA' : 'CS'}-{structure.code}{(index3 + 1).toString().padStart(3, '0')} {Functions.getLevLocDet(image)}
                                                    </span>
                                                </p>

                                            </Col>
                                        </Fragment>

                                    ))}
                                </Row>
                            </>
                        </div>
                        <div className="wd-250">
                            {/* {displayRightSidebar && */}
                            <>
                                <div className={"text-center p-1 " + (Functions.isRestrictedAccess(structure) ? "bg-info" : "bg-danger")}>{Functions.isRestrictedAccess(structure) ? "RESTRICTED ACCESS" : "CONFINED SPACE"}</div>
                                <strong>Classified from AS2865</strong><br />
                                <strong>Confined Space Criteria below:</strong><br />
                                <i className={"fe fw-bold " + (Functions.getStructurecriteriaByLetter(structure, 'A') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (A) Part/Full Enclosed<br />
                                <i className={"fe fw-bold " + (Functions.getStructurecriteriaByLetter(structure, 'B') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (B) Primarily not for Occupancy<br />
                                <i className={"fe fw-bold " + (Functions.getStructurecriteriaByLetter(structure, 'C') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (C) Sub-Oxygen Range<br />
                                <i className={"fe fw-bold " + (Functions.getStructurecriteriaByLetter(structure, 'D') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (D) Airborne Impairment<br />
                                <i className={"fe fw-bold " + (Functions.getStructurecriteriaByLetter(structure, 'E') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (E) Airborne Cont. Flammable<br />
                                <i className={"fe fw-bold " + (Functions.getStructurecriteriaByLetter(structure, 'F') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (F) Free Flowing Solid/Liquid<br />
                            </>
                            {/* } */}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment >
    );
};

CSRAArea.propTypes = {};

CSRAArea.defaultProps = {};

export default CSRAArea;