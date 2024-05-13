import React, {  } from "react";
import { Badge, Table } from "react-bootstrap";

export function ReportStats({ total_open, total_open_outstanding, total_in_progress, total_submitted, total_postponed, total_declined, total_closed, total_closed_outstanding }) {

    return (
        <div className="table-responsive mt-5">
            <Table striped bordered className="table-stats text-center">
                <thead>
                    <tr>
                        <th colSpan="2" className="align-top">Open</th>
                        <th rowSpan="2" className="align-top">In Progress</th>
                        <th rowSpan="2" className="align-top">Submitted</th>
                        <th rowSpan="2" className="align-top">Postponed</th>
                        <th rowSpan="2" className="align-top">Declined</th>
                        <th colSpan="2" className="align-top">Closed</th>
                    </tr>
                    <tr>
                        <th>Current</th>
                        <th>Outstanding</th>
                        <th>Current</th>
                        <th>Outstanding</th>
                    </tr>
                    <tr>
                        <td><Badge bg="danger">{total_open}</Badge></td>
                        <td><Badge bg="danger">{total_open_outstanding}</Badge></td>
                        <td><Badge bg="danger">{total_in_progress}</Badge></td>
                        <td><Badge bg="warning">{total_submitted}</Badge></td>
                        <td><Badge bg="info">{total_postponed}</Badge></td>
                        <td><Badge bg="primary">{total_declined}</Badge></td>
                        <td><Badge bg="success">{total_closed}</Badge></td>
                        <td><Badge bg="success">{total_closed_outstanding}</Badge></td>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}