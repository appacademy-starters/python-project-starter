import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { useParams } from "react-router-dom";


export const AdminDashboard = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	let { id } = useParams();

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0
	});


	return (
		<>
			<div className="d-flex p-4">
				<div className="h-100 p-2 rounded-3">
					<div className="dashboard-page">
						{/* title section */}
						<div className="title-area container-fluid p-2">
							<h1>
								<strong>Welcome back, Carlos </strong>
								{/* {activeNonprofit ? activeNonprofit.name : ""} */}
							</h1>
						</div>
						{/* Dashboard content */}
						
                        <div className="container">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h1>Donations Received</h1>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Item</th>
							<th scope="col">Date</th>
							<th scope="col">Donor</th>
							<th scope="col">Pick Up Date</th>
							<th scope="col">Pick Up Time Window</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Jean Jacket</td>
							<td>10-Dec-21</td>
							<td>Esther T.</td>
							<td>17-Dec-2021</td>
							<td>12PM - 4PM</td>
						</tr>

						{activeNonprofit
							? activeNonprofit.items_received
									.filter(item => item.donation_type == "donation")
									.map(item => {
										return (
											<tr key={item.id}>
												<td>{item.category}</td>
												<td>{`${new Date(item.posted_date).getDate()}-${getMonthName(
													new Date(item.posted_date).getMonth() + 1
												)}-${new Date(item.posted_date).getFullYear()}`}</td>
												<td>
													{store.users
														? store.users.map(user => {
																if (user.id == item.donated_by) {
																	return user.name;
																}
														  })
														: ""}
												</td>
												<td>20-Dec-2021</td>
												<td>8AM - 12PM</td>
											</tr>
										);
									})
							: console.log("none")}
					</tbody>
				</table>
			</div>
		</div>
					</div>
				</div>
			</div>
		</>
	);
};