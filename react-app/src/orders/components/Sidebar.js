import React, { useState, useContext } from "react";

import { useHistory } from "react-router";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export const SideBar = ({ user, userId, nonprofit, nonprofitId }) => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

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
                    USERNAME
					{/* {user ? `${user.name} ${user.last_name}` : nonprofit ? nonprofit.name : ""} */}
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
							// user
							// 	? history.push(`/profile/user/${userId}`)
							// 	: history.push(`/profile/nonprofit/${nonprofitId}`);
						}}>
						<i className="fas fa-home" />
						<span className="ms-4 sidebar-item ">Dashboard</span>
					</a>
				</li>
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className={active ? "nav-link text-white " + activeOption : "nav-link text-white"}
						onClick={() => {
							// user
							// 	? history.push(`/profile/user/${userId}/donations`)
							// 	: history.push(`/profile/nonprofit/${nonprofitId}/donations`);
						}}>
						<i className="fas fa-donate" />
						<span className="ms-4 sidebar-item">Donations</span>
					</a>
				</li>
				{user ? (
					<li className="m-2">
						<a
							style={{ cursor: "pointer" }}
							className="nav-link text-white"
							onClick={() => {
								// history.push(`/profile/user/${userId}/my-orders`);
							}}>
							<i className="fas fa-tags" />
							<span className="ms-4 sidebar-item">Orders</span>
						</a>
					</li>
				) : (
					""
				)}
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className="nav-link text-white"
						onClick={() => {
							// user
							// 	? history.push(`/profile/user/${userId}/myaccount`)
							// 	: history.push(`/profile/nonprofit/${nonprofitId}/myaccount`);
						}}>
						<i className="fas fa-cog" />
						<span className="ms-4 sidebar-item">My Account</span>
					</a>
				</li>
				<li className="m-2">
					<a
						style={{ cursor: "pointer" }}
						className="nav-link text-white"
						onClick={() => {
							// history.push("/");
							// actions.logout();
						}}>
						<i className="fas fa-sign-out-alt" />
						<span className="ms-4 sidebar-item">Log Out</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

SideBar.propTypes = {
	user: PropTypes.object,
	userId: PropTypes.string,
	nonprofit: PropTypes.object,
	nonprofitId: PropTypes.string
};