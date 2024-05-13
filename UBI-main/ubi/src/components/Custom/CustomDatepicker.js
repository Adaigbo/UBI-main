import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';


export const CustomDatePicker = (prop) => {
    const [defaultDate, setDefaultDate] = useState(null);

    useEffect(() => {
        if (prop.Date) {
            setDefaultDate(new Date(prop.Date));
        }
    }, []);

    const getYear = (date) => {
        return date.getFullYear();
    };
    const getMonth = (date) => {
        return date.getMonth();
    };
    const range = (start, end, step) => {
        const rangeArray = [];
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
        return rangeArray;
    };
    const years = range(1900, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <DatePicker
            className={prop.className}
            name={prop.name}
            autoComplete={prop.autoComplete}
            placeholderText={prop.placeholder}
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
            }) => (
                <div className="m-2 d-flex justify-content-center">
                    <select className="me-2 px-2 form-select-lg border-rounded border-primary"
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                    >
                        {years.map((option) => (
                            <option key={option} value={option} className="my-2 py-2">
                                {option}
                            </option>
                        ))}
                    </select>

                    <select className="ms-2 px-2 form-select-lg border-primary"
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {<div className="p-2 font-weight-bold">{option}</div>}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            selected={defaultDate}
            onChange={(date) => setDefaultDate(date)}
            maxDate={prop.maxdate}
        />
    );
};

CustomDatePicker.defaultProps = {
    className: "", // Default value for className prop
    autoComplete: "off", // Default value for autoComplete prop
    placeholder: '',
};

CustomDatePicker.propTypes = {
    name : PropTypes.string.isRequired,
}