import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Utils from "../../utils/Utils";
import UsersServices from "../../services/UsersServices";
import RolesServices from "../../services/RolesServices";
import './Users.css'
import FileUploadPopup from "../Custom/FileUploadPopup";


const UsersPopup = ({ showModal, setShowModal, fetchUsers, id }) => {
    const [user, setUser] = useState({});

    const [roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);

    const [showPhotoModal, setShowPhotoModal] = useState(false);

    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setShowPhotoModal(false);

        if (showModal) {
            setLoading(true);

            if (id) {
                UsersServices.get(id).then((result) => {
                    setUser(result.data);
                    setSelectedRoles({ label: result.data.role, 'value': result.data.role });

                });
            }
            else {
                setUser({});
            }

            setLoading(false);
            fetchAllRoles();

        }

    }, [showModal, id]);


    const fetchAllRoles = (selected) => {
        RolesServices.get().then(result => {
            var _roles = [];
            for (var i = 0; i < result.data.length; i++) {
                _roles.push({ value: result.data[i].name, label: result.data[i].name });
            }
            setRoles(_roles);

        });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);

        try {
            const formData = new FormData(event.target);
            const jsonObject = Utils.formDataToJSON(formData);

            if (id) { // update
                let row = await UsersServices.update(id, jsonObject);
            }
            else { //insert
                let row = await UsersServices.insert(jsonObject);
            }
            fetchUsers();

            Utils.Toast('success', 'User Saved Successfully!');
            setShowModal(false);
        }
        catch (error) {
            console.log(error);
        }

        setDisabled(false);
    }

    return (
        <Fragment>
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" container={() => document.querySelector('#root')} id="saveuserContainer" backdrop="static">
                <Modal.Header closeButton={false}>
                    <Modal.Title>{id ? 'Update' : 'Add'} User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {loading &&
                        <div className="text-center">
                            <div className="lds-ripple">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    }
                    {!loading &&

                        <form id="saveuser" name="saveuser" method="post" onSubmit={handleSubmit} className="d-flex flex-column needs-validation was-validated">

                            <div className="form-group">
                                <p className="mg-b-10">Full Name</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Full Name" required type="text" name="name" defaultValue={user.name} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <p className="mg-b-10">Role</p>
                                <Select classNamePrefix="Select2"
                                    closeMenuOnSelect={true}
                                    value={selectedRoles}
                                    onChange={setSelectedRoles}
                                    components={makeAnimated()}
                                    name="role"
                                    isMulti={false}
                                    options={roles}
                                />
                            </div>

                            <div className="form-group">
                                <p className="mg-b-10">Username</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Username" required type="text" name="username" defaultValue={user.username} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <p className="mg-b-10">Email Address</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Email Address" required type="email" name="email" defaultValue={user.email} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <p className="mg-b-10">Password</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Password" required={user.id ? false : true} type="text" name="password" />
                                </Form.Group>
                                {user.id && <small>Leave this field empty if you dont want to change the password</small>}
                            </div>
                            <hr />

                        </form>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        disabled={disabled}
                        variant="primary"
                        type="submit"
                        form="saveuser"
                        className="text-center">
                        Save
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            setShowModal(false);
                        }}
                        className="text-center">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

UsersPopup.propTypes = {};

UsersPopup.defaultProps = {};

export default UsersPopup;
