import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export function AlertMessage({ variant, outlined, strongText, text }) {
    const [show, setShow] = useState(true);

    return (
        <>
            {show === true &&
                <Alert
                    className={"alert alert-dismissible fade show " + (outlined ? "alert-outline-" + variant : "")}
                    variant={outlined ? "" : variant}>
                    {" "}
                    <strong>{strongText}</strong> {text}
                    <Button
                        variant=""
                        type="button"
                        onClick={() => setShow(false)}
                        className="btn-close btn">
                        <span aria-hidden="true">×</span>
                    </Button>
                </Alert>
            }
        </>
    );
}