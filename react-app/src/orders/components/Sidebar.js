import React, { useState, useContext } from "react";

import { useHistory } from "react-router";
import PropTypes from "prop-types";


export const SideBar = ({ user, userId }) => {
	const history = useHistory();
	// const { store, actions } = useContext(Context);

	const [dropdown, setDropdown] = useState(false);
	const [active, setActive] = useState(false);

	let show = "";
	let activeOption = "";

	if (dropdown) {
		show = "show";
	}

	if (active) {
		activeOption = "active";
	}

	return (
		<div className="d-flex flex-column  flex-shrink-0 p-3 text-white bg-dark" style={{ width: "20%" }}>
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<svg className="bi me-2" width="40" height="32" />
				<span className="fs-4">
                    admin
				</span>
			</a>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}
						aria-current="page"
						onClick={() => {
							history.push(`/profile/user/${userId}`);
						}}>
						<i className="fas fa-home" />
						<span className="ms-4 sidebar-item ">orders</span>
					</a>
				</li>
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}
						aria-current="page"
						onClick={() => {
							history.push(`/profile/user/${userId}/orderdetails`);
						}}>
						<i className="fas fa-home" />
						<span className="ms-4 sidebar-item ">order details</span>
					</a>
				</li>
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}
						onClick={() => {
							history.push(`/profile/user/${userId}/customers`);
						}}>
						<i className="fas fa-donate" />
						<span className="ms-4 sidebar-item">customers</span>
					</a>
				</li>
	
					<li className="m-2">
						<a
							style={{ cursor: "pointer" }}
							className="nav-link text-white"
							onClick={() => {
								history.push(`/profile/user/${userId}/products`);
							}}>
							<i className="fas fa-tags" />
							<span className="ms-4 sidebar-item">products</span>
						</a>
					</li>
			
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className="nav-link text-white"
						onClick={() => {
							history.push(`/profile/user/${userId}/myaccount`);
						}}>
						<i className="fas fa-cog" />
						<span className="ms-4 sidebar-item">my account</span>
					</a>
				</li>
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className="nav-link text-white"
						onClick={() => {
							history.push("/");
							// actions.logout();
						}}>
						<i className="fas fa-sign-out-alt" />
						<span className="ms-4 sidebar-item">log out</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

SideBar.propTypes = {
	user: PropTypes.object,
	userId: PropTypes.string,
};