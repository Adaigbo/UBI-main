import React, { Fragment, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import ConfinedReportStructuresServices from "../../../services/ConfinedReportStructuresServices";
import Swal from "sweetalert2";
import Utils from "../../../utils/Utils";


const Structures = ({ structure, confined_report, site, doForceReload, displayRightSidebar }) => {

    const [showStructureModal, setShowStructureModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);

    const openDelete = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-primary me-2",
                cancelButton: "btn btn-primary me-2",
                allowOutsideClick: false,
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                allowOutsideClick: false,
            })
            .then(async (result) => {
                if (result.isConfirmed) {

                    try {
                        await ConfinedReportStructuresServices.delete(structure.id);
                        doForceReload();

                        Utils.Toast('success', 'Structure Successfully Deleted!');
                    }
                    catch (error) {
                        console.log(error);
                    }

                }
                else if (result.dismiss === Swal.DismissReason.cancel) {

                }
            });
    }

    const getStructurecriteriaByLetter = (letter) => {
        var res = structure.confined_structure_criterias.find((obj) => obj.criteria == letter);
        res = res ? res.data : false;
        return res;
    }

    // const isRestrictedAccess = () => {
    //     const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    //     var count = 0;

    //     for (var i = 0; i < letters.length; i++) {
    //         if (getStructurecriteriaByLetter(letters[i]) !== false) {
    //             count++;
    //         }
    //     }

    //     return (count !== letters.length);
    // }

    return (
        <Fragment>
            <Card className="custom-card overflow-visible">
                <Card.Body>
                    <div className="d-flex">
                        <div className="w-100">
                            <>
                                <div className="d-flex">
                                    <p className={"fw-bold m-0 " + (Functions.isRestrictedAccess(structure) ? "text-info" : "text-danger")}>
                                        {structure.title} ({structure.code})
                                    </p>
                                    {Utils.can('delete_confined_space_structures') &&
                                        <Button variant="danger" className="ms-2" size="xs" onClick={openDelete}>
                                            <i className="fe fe-trash"></i> Delete Structure
                                        </Button>
                                    }
                                    {Utils.can('update_confined_space_structures') &&
                                        <>
                                            <Button variant="info" className="ms-2" size="xs" onClick={() => setShowStructureModal(true)}>
                                                <i className="fe fe-edit"></i> Edit Structure
                                            </Button>
                                            {showStructureModal &&
                                                <StructureAddUpdatePopup showModal={showStructureModal} setShowModal={setShowStructureModal} structureId={structure.id} confined_report={confined_report} site={site} doForceReload={doForceReload} />
                                            }
                                        </>
                                    }
                                    {Utils.can('insert_confined_space_structure_tasks') &&
                                        <>
                                            <Button variant="primary" className="ms-2" size="xs" onClick={() => setShowTaskModal(true)}>
                                                <i className="fe fe-plus"></i> Add New Task
                                            </Button>
                                            {showTaskModal &&
                                                <TaskAddUpdatePopup showModal={showTaskModal} setShowModal={setShowTaskModal} taskId={false} confined_structure={structure} doForceReload={doForceReload} />
                                            }
                                        </>
                                    }
                                </div>
                                {structure?.confined_tasks?.map((task, index) => (
                                    <Tasks structure={structure} task={task} doForceReload={doForceReload} key={index} />
                                ))}

                                <Row>
                                    {structure.confined_structure_images.map((image, index) => (
                                        <StructureImage
                                            key={index}
                                            confinedStructureImage={image}
                                            doForceReload={doForceReload}
                                            users={site.users}
                                            count={index + 1}
                                            type={Functions.isRestrictedAccess(structure) ? 'RA' : 'CS'}
                                            confinedStructureCode={structure.code} />
                                    ))}
                                </Row>
                            </>
                        </div>
                        <div className="wd-250">
                            {displayRightSidebar &&
                                <>
                                    <div className={"text-center p-1 " + (Functions.isRestrictedAccess(structure) ? "bg-info" : "bg-danger")}>{Functions.isRestrictedAccess(structure) ? "RESTRICTED ACCESS" : "CONFINED SPACE"}</div>
                                    <strong>Classified from AS2865</strong><br />
                                    <strong>Confined Space Criteria below:</strong><br />
                                    <i className={"fe fw-bold " + (getStructurecriteriaByLetter('A') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (A) Part/Full Enclosed<br />
                                    <i className={"fe fw-bold " + (getStructurecriteriaByLetter('B') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (B) Primarily not for Occupancy<br />
                                    <i className={"fe fw-bold " + (getStructurecriteriaByLetter('C') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (C) Sub-Oxygen Range<br />
                                    <i className={"fe fw-bold " + (getStructurecriteriaByLetter('D') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (D) Airborne Impairment<br />
                                    <i className={"fe fw-bold " + (getStructurecriteriaByLetter('E') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (E) Airborne Cont. Flammable<br />
                                    <i className={"fe fw-bold " + (getStructurecriteriaByLetter('F') === false ? "text-danger fe-x" : "text-success fe-check")}></i> (F) Free Flowing Solid/Liquid<br />
                                </>
                            }
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

Structures.propTypes = {};

Structures.defaultProps = {};

export default Structures;
