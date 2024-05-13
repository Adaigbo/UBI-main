import React, { useEffect, useState } from "react";
import Utils from "../../utils/Utils";

export function RiskTable({ readonly, selected, setSelected, isCenter, name }) {
    const [selectedValue, setSelectedValue] = useState();
    const data = Utils.RiskTable();

    useEffect(() => {
        setSelectedValue(selected);
    }, []);

    const updateSelected = (val) => {
        if (!readonly) {
            setSelectedValue(val);
            if (setSelected) {
                setSelected(val);
            }
        }
    }

    return (
        <table className={isCenter ? 'm-auto' : ''}>
            <thead>
                <tr>
                    <th></th>
                    <th colSpan={data.headings.top.length} className="text-center p-3 wd-100">{data.mainHeadings.top}</th>
                </tr>
                <tr>
                    <th className="text-center p-3 wd-100">{data.mainHeadings.left}</th>
                    {data.headings.top.map((heading, index) => (
                        <th key={index} className="text-center p-3 wd-100">{heading.label}<br />{heading.value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.headings.left.map((heading, rowIndex) => (
                    <tr key={rowIndex}>
                        <th className="text-center p-3 wd-100">{heading.value}<br />{heading.label}</th>
                        {data.data[rowIndex].map((cell, cellIndex) => (
                            <td
                                onClick={() => updateSelected(heading.value + data.headings.top[cellIndex].value)}
                                key={cellIndex}
                                className={'bg-' + cell.class + ' text-center p-3 wd-100 ' + (heading.value + data.headings.top[cellIndex].value === selectedValue ? 'opacity-50' : '') + (readonly ? '' : ' cursor-pointer')}>
                                {cell.label}<br />{cell.number}
                                <input
                                    type="radio"
                                    name={name ? name : 'priorityRisk'}
                                    className="d-none"
                                    value={heading.value + data.headings.top[cellIndex].value}
                                    checked={heading.value + data.headings.top[cellIndex].value === selectedValue}
                                    onChange={() => setSelectedValue(heading.value + data.headings.top[cellIndex].value)} />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}