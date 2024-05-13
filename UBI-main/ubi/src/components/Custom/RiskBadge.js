import React, { useEffect, useState } from "react";
import Utils from "../../utils/Utils";
import { Badge } from "react-bootstrap";

export function RiskBadge({ selected, textOnly }) {
    const [risk, setRisk] = useState(null);
    const [value, setValue] = useState(null);

    const data = Utils.RiskTable();

    useEffect(() => {
        if (value != selected) {
            setValue(selected);
        }
    });

    useEffect(() => {
        if (value && value.length == 2) {
            const i = data.headings.left.findIndex(item => item.value == value[0]);
            const j = data.headings.top.findIndex(item => item.value == value[1]);

            if (i >= 0 && j >= 0) {
                setRisk(data.data[i][j]);
            }
        }
    }, [value]);


    return (
        <>
            {risk &&
                <>
                    {textOnly ?
                        <span>{risk.label} {risk.number}</span>
                        :
                        <Badge bg={risk.class}>{risk.label} {risk.number}</Badge>
                    }
                </>
            }
        </>
    );
}