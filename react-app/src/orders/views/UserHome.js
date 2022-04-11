import React, { useContext } from "react";
// import { Context } from "react";

import { useHistory } from "react-router";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { SideBar } from "../components/Sidebar";
import { DashboardOrders } from "./dashboards/DashboardOrders";
import { DashboardProducts } from "./dashboards/DashboardProducts";
import { DashboardCustomers } from "./dashboards/DashboardCustomers";
import { DashboardMyAccount } from "./dashboards/DashboardMyAccount";


export const UserHome = props => {
	const params = useParams();
	const history = useHistory();

	// const { store, actions } = useContext(Context);

	let { id } = useParams();


	let activeUser;


	const clickedProfile = profile => {
		if (profile == "DashboardMyAccount") {
			return <DashboardMyAccount />;
		} else if (profile == "customers") {
			return <DashboardCustomers />;
		} else if (profile == "products") {
			return <DashboardProducts />;
		} else {
			return <DashboardOrders />;
		}
	};

	return (
		<div className="d-flex">
            <SideBar />
			{clickedProfile(params.profileoption)}
		</div>
	);
};

UserHome.propTypes = {
	match: PropTypes.object
};