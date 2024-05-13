import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import PermissionsServices from "../../services/PermissionsServices";
import RoleServices from "../../services/RolesServices";
import Utils from "../../utils/Utils";

const Permission = () => {

    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);

    const [loading, setLoading] = useState(true);
    const [forceLoad, setForceLoad] = useState(false);

    useEffect(() => {
        setLoading(true);
        var scroll = window.scrollY;

        const fetch = async () => {
            if (!Utils.can("View Permissions") && !Utils.can("Update Permissions")) {
                return;
            }
            var _roles = await RoleServices.get();
            console.log(_roles.data);
            setRoles(_roles.data);

            var _permissions = await PermissionsServices.get();
            console.log(_permissions.data);
            setPermissions(_permissions.data);
        }

        fetch();
        setLoading(false);
        Utils.scrollTo(scroll);
    }, [forceLoad]);

    const toggle = async (role, permission) => {
        var response = await PermissionsServices.toggle(role, permission);
        Utils.Toast('success', response.data);

        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }



    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Permissions</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Permissions
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            {/* <!-- End Page Header --> */}

            {/* <!-- Row --> */}
            <Row className="row-sm">
                <Col lg={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">Role Permissions</h6>
                                <p className="text-muted card-sub-title">
                                    View Role Permissions
                                </p>
                            </div>
                            <div className="responsive">
                                {loading &&
                                    <div className="text-center">
                                        <div className="lds-ripple">
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                }
                                {!loading &&
                                    <Table responsive className="card-table table-striped table-vcenter text-nowrap table-hover table-bordered mb-0">
                                        <tbody>
                                            <tr>
                                                <th>Permission Name</th>
                                                {roles.map((role, index) => (
                                                    <th>{role.name}</th>
                                                ))}
                                            </tr>
                                            {permissions.map((permission, index) => (
                                                <Fragment key={index}>
                                                    <tr key={index}>
                                                        <th className="max-wd-200 wd-200 text-wrap ">
                                                            {permission.name}
                                                        </th>
                                                        {roles.map((role, index3) => (
                                                            <td key={index3}>
                                                                <div className={`main-toggle main-toggle-dark yesno text-dark ${role.permissions.some(perm => perm.id === permission.id) ? 'on' : 'off'}`} onClick={() => toggle(role.name, permission.name)} >
                                                                    <span></span>
                                                                </div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </Fragment>
                                            ))}
                                        </tbody>
                                    </Table>
                                }
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    );
};

Permission.propTypes = {};

Permission.defaultProps = {};

export default Permission;
