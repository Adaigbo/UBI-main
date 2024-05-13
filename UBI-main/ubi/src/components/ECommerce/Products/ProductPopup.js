import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Utils from "../../../utils/Utils";
import ProductServices from './../../../services/ProductServices';
import FileUploadPopup from "../../Custom/FileUploadPopup";
import { CustomDatePicker as DatePicker } from "../../../components/Custom/CustomDatepicker";


const ProductPopup = ({ showModal, setShowModal, id }) => {
    const [product, setProduct] = useState({});


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
                ProductServices.get(id).then((result) => {
                    setProduct(result.data);

                    setLoading(false);
                });
            }
            else {
                setProduct({});

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
                let row = await ProductServices.update(id, jsonObject);
            }
            else { //insert
                let row = await ProductServices.insert(jsonObject);
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
                    <Modal.Title>{id ? 'Update' : 'Add'} Product</Modal.Title>
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
                                <p className="mg-b-10">Product Name</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Product Name" required type="text" name="name" defaultValue={product.name} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <p className="mg-b-10">Description</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Description" required type="text" name="description" defaultValue={product.description} />
                                </Form.Group>
                            </div>
                            {/* <div className="form-group">
                                <p className="mg-b-10">DOB</p>
                                <DatePicker Date={product.dob} className={"form-control"} placeholder={"Enter Date Of Birth"} name={"dob"} maxdate={new Date()} />
                            </div> */}

                            <div className="form-group">
                                <p className="mg-b-10">Stock</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Stock amount" required type="number" name="stock" defaultValue={product.stock} min={1} />
                                </Form.Group>
                            </div>

                            <div className="form-group">
                                <p className="mg-b-10">Price</p>
                                <Form.Group className=" has-success mg-b-0">
                                    <Form.Control placeholder="Enter the Price" required type="number" name="price" defaultValue={product.price} min={1} />
                                </Form.Group>
                            </div>
                            <hr />
                            <div className="form-group">
                                <p className="mg-b-10">Product Photo (preferred size 400 X 150)</p>
                                <Button
                                    variant="primary"
                                    disabled={showSignatureModal}
                                    onClick={() => {
                                        setShowSignatureModal(true);
                                    }}
                                    className="text-center">
                                    Choose File
                                </Button>
                                <Form.Control type="hidden" name="image" defaultValue={signature ? signature : product.image} />
                                <FileUploadPopup
                                    showFileModal={showSignatureModal}
                                    setShowFileModal={setShowSignatureModal}
                                    container={"#saveuserContainer"}
                                    setFile={setSignature}
                                    folder={"products"}
                                    accept={"image/*"} />
                                <br />
                                {(signature || product.signature) &&
                                    <img className="wd-50 ht-35" src={process.env.REACT_APP_UPLOADS_PUBLIC_URL + '/products/' + (signature ? signature : signature)} alt="" />
                                }
                                {process.env.REACT_APP_UPLOADS_PUBLIC_URL + 'products/' + signature}
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

ProductPopup.propTypes = {};

ProductPopup.defaultProps = {};

export default ProductPopup;
