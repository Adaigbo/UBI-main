import React, { Fragment, useEffect, useState } from "react";
import { Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import UsersServices from "../../services/UsersServices";
import UsersPopup from "./UsersPopup";
import { UsersDatatable } from "./UsersDatatable";
import Utils from "../../utils/Utils";


const Users = () => {
	const [users, setUsers] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = () => {
		// Assuming you have an asynchronous operation that returns a promise
		var scroll = window.scrollY;
		setLoading(true);
		UsersServices.get().then(result => {
			setUsers(result.data);
			setLoading(false);
			Utils.scrollTo(scroll);
		});
	}

	return (
		<Fragment>
			{/* <!-- Page Header --> */}
			<div className="page-header">
				<div>
					<h2 className="main-content-title tx-24 mg-b-5">Users</h2>
					<Breadcrumb>
						<Breadcrumb.Item href={process.env.PUBLIC_URL}>
							Home
						</Breadcrumb.Item>
						<Breadcrumb.Item active>
							Users
						</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className="d-flex">
					<div className="justify-content-center">
						{Utils.can("Create User") &&
							<Button
								variant="primary" type="button" className="my-2 btn-icon-text" onClick={() => setShowModal(true)}>
								<i className="fe fe-plus me-2"></i> Add New User
							</Button>
						}
						{/* For Add New User Only */}
						<UsersPopup showModal={showModal} setShowModal={setShowModal} fetchUsers={fetchUsers} id={null} />
					</div>
				</div>
			</div>
			{/* <!-- End Page Header --> */}

			{/* <!-- Row --> */}
			<Row className="row-sm">
				<Col lg={12}>
					<Card className="custom-card overflow-hidden">
						<Card.Body>
							<div>
								<h6 className="main-content-label mb-1">Manage Users</h6>
								<p className="text-muted card-sub-title">
									Manage users and add Signatures
								</p>
							</div>
							<div className="responsive">
								{loading &&
									<div className="text-center">
										<div className="lds-ripple">
											<div></div>
											<div></div>
										</div>
									</div>
								}
								{!loading &&
									<UsersDatatable users={users} setUsers={setUsers} fetchUsers={fetchUsers} />
								}
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

Users.propTypes = {};

Users.defaultProps = {};

export default Users;
