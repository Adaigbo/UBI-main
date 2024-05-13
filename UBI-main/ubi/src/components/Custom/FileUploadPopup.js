import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FileUploadServices from "../../services/FileUploadServices";
import Utils from "../../utils/Utils";
import { DropzoneArea } from "material-ui-dropzone"; // Import DropzoneArea

/**
 *
 * @param {setFile} setFile Name On the server
 * @param {setFileName} setFileName actual Name of the file
 * @param {folder} folder name will be passed to the server to decide where should the file be uploaded
 *        Possible values can be [entries, evidences, users, sites, reports etc]
 * @param {accept} accept the files to upload
 * @param {container} container like #root
 * @returns setFile and setFileName
 */
const FileUploadPopup = ({ showFileModal, setShowFileModal, container, setFile, setFileName, folder, accept }) => {
  
    const [disabled, setDisabled] = useState(false);

  const handleSubmitFile = async (event) => {
    // event.preventDefault();
    if (event.length === 0) return;
    setDisabled(true);

    try {
      // const form = document.querySelector('#saveFileUpload');
      // const formData = new FormData(form)
      const formData = new FormData();
      formData.append("folder", folder);
      formData.append("attachment", event[0]); // Uploading each time single file

      let row = await FileUploadServices.save(formData);

      setFile(row.data.file);
      if (setFileName) {
        setFileName(row.data.fileName);
      }

      Utils.Toast('success', 'File Uploaded Successfully!');
      // form.reset();
      setShowFileModal(false);
    } 
    catch (error) {
      console.log(error);
    }

    setDisabled(false);
  }

  return (
    <Fragment>

      <Modal show={showFileModal} onHide={() => setShowFileModal(false)} size="md" container={() => document.querySelector(container)} backdrop="static">
        <Modal.Header closeButton={false}>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!disabled && (
            
            // <div>
            //  <form id="saveFileUpload" name="saveFileUpload" method="post" onSubmit={handleSubmitFile} className="d-flex flex-column needs-validation was-validated">
            //     <Form.Control type="hidden" name="folder" defaultValue={folder} />

            //     <div className="form-group">
            //       <p className="mg-b-10">Attachment</p>
            //       <Form.Group className=" has-success mg-b-0">
            //         <Form.Control type="file" name="attachment" required accept={accept} onChange={handleSubmitFile} disabled={disabled} />
            //       </Form.Group>
            //     </div>
            //   </form>
            // </div>
            <DropzoneArea
              acceptedFiles={accept ? [accept] : undefined}
              showPreviews={true}
              showPreviewsInDropzone={false}
              useChipsForPreview
              dropzoneText="Drag and drop a file here or click"
              onChange={handleSubmitFile}
              showAlerts={false}
              disabled={disabled}
              filesLimit={1}
            />
          )}
          {disabled && (
            <div className="text-center">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
                        disabled={disabled}
                        variant="primary"
                        onClick={handleSubmitFile}
                        type="button"
                        // form="saveFileUpload"
                        className="text-center">
                        Upload
                    </Button> */}
          {
            <Button
              variant="danger"
              disabled={disabled}
              onClick={() => {
                setShowFileModal(false);
                // document.querySelector('#saveFileUpload').submit()
              }}
              className="text-center">
              Close
            </Button>
          }
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

FileUploadPopup.propTypes = {};

FileUploadPopup.defaultProps = {};

export default FileUploadPopup;
