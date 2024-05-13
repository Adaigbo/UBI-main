import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Basicdatatable } from "../../../data/crypotocurriencies/transcationdetails";
import OrderServices from "../../../services/OrderServices";

const Transcations = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetch = async () => {
			var _orders = await OrderServices.myOrders();
			setOrders(_orders.data);
		}

		fetch();
	}, [])

	return (
		<Fragment>
			{/* <!-- Page Header --> */}
			<div className="page-header">
				<div>
					<h2 className="main-content-title tx-24 mg-b-5">Histroy	</h2>
					<Breadcrumb className="breadcrumb">
						<Breadcrumb.Item active>Purchase Record	</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</div>
			{/* <!-- End Page Header --> */}

			{/* <!-- row --> */}
			<Row className=" row-sm">
				<Col md={12} lg={12} xl={12}>
					<Card className=" custom-card transcation-crypto">
						<Card.Header className="border-bottom-0">
							<h6 className="main-content-label mb-1">Transaction History</h6>
						</Card.Header>
						<Card.Body className="card-body">

							<Basicdatatable orders={orders}/>

						</Card.Body>
					</Card>

					{/* <!-- Row End --> */}
				</Col>
			</Row>
			{/* <!-- Row End --> */}
		</Fragment>
	)
};

Transcations.propTypes = {};

Transcations.defaultProps = {};

export default Transcations;
