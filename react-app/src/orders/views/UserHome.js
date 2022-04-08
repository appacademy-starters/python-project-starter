import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useHistory } from "react-router";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { SideBar } from "../components/Sidebar";

// import { BarGraph } from "../../component/BarGraph";

export const UserProfile = props => {
	const params = useParams();
	const history = useHistory();

	const { store, actions } = useContext(Context);

	let { id } = useParams();

	// setting logged in nonprofit in order to
	// use its info in the dashboard
	let activeUser;


	const clickedProfile = profile => {
		if (profile == "home") {
			// return <UserProfileDonations />;
		} else if (profile == "myaccount") {
			// return <UserProfileMyAccount />;
		} else if (profile == "my-orders") {
			// return <UserNonProfitFriends />;
		} else {
			// return <UserProfileHome />;
		}
	};

	return (
		<div className="d-flex">
            <SideBar />
			{/* <SideBar user={activeUser} userId={id} /> */}
			{clickedProfile(params.profileoption)}
		</div>
	);
};

UserProfile.propTypes = {
	match: PropTypes.object
};