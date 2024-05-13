import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Utils from "../../../utils/Utils";
import NotificationServices from './../../../services/NotificationServices';
import { CustomDatePicker as DatePicker } from "../../../components/Custom/CustomDatepicker";
import { Editor } from "./../../Custom/Editor";
// D:\TargetX\react.corprisk\crm\src\components\Custom\Editor.js


const NotificationPopup = ({ showModal, setShowModal, id }) => {
    const [notification, setNotification] = useState({});


    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [photo, setPhoto] = useState('');

    const [showSignatureModal, setShowSignatureModal] = useState(true);
    const [signature, setSignature] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setShowPhotoModal(false);
        setShowSignatureModal(false);

        if (showModal) {
            setLoading(true);

            if (id) {
                NotificationServices.get(id).then((result) => {
                    setNotification(result.data);

                    setLoading(false);
                });
            }
            else {
                setNotification({});

                setLoading(false);
            }

            /* reset */
            setPhoto('');
            setSignature('');
        }

    }, [showModal, id]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);

        try {
            const formData = new FormData(event.target);
            const jsonObject = Utils.formDataToJSON(formData);

            if (id) { // update
                let row = await NotificationServices.update(id, jsonObject);
            }
            else { //insert
                let row = await NotificationServices.insert(jsonObject);
            }

            Utils.Toast('success', 'Product Saved Successfully!');
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
                    <Modal.Title>{id ? 'Update' : 'Add'} Notification</Modal.Title>
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
                                <p className="mg-b-10">Notification Title</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Notification Title" required type="text" name="title" defaultValue={notification.title} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <p className="mg-b-10">Description</p>
                                <Editor name="announcement" required value={notification.announcement} />
                            </div>
                            <div className="form-group">
                                <p className="mg-b-10">Expiry Day</p>
                                <DatePicker Date={notification.valid_till} className={"form-control"} required placeholder={"Enter Expiry Date"} name={"valid_till"} />
                            </div>
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

NotificationPopup.propTypes = {};

NotificationPopup.defaultProps = {};

export default NotificationPopup;
