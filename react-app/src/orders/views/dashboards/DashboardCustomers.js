import React, { useContext } from "react";

import { useParams } from "react-router-dom";


export const DashboardCustomers = () => {
	const params = useParams();
	// const { store, actions } = useContext(Context);
	let { id } = useParams();

	// const formatter = new Intl.NumberFormat("en-US", {
	// 	style: "currency",
	// 	currency: "USD",
	// 	minimumFractionDigits: 0
	// });


	return (
		<>
			<div className="d-flex p-4">
				<div className="h-100 p-2 rounded-3">
					<div className="dashboard-page">
						{/* title section */}
						<div className="title-area container-fluid p-2">
							<h1>
								<strong>Customers </strong>
								{/* {activeNonprofit ? activeNonprofit.name : ""} */}
							</h1>
						</div>
						{/* Dashboard content */}
						
                        <div className="container">
			<div className="h-100 p-5 bg-light border rounded-3">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Customer ID</th>
							<th scope="col">Company</th>
							<th scope="col">Tier Level</th>
							<th scope="col">Contact Name</th>
							<th scope="col">Phone</th>
							<th scope="col">Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>001t</td>
							<td>Chester Flooring</td>
							<td>1</td>
							<td>Chester Tester</td>
							<td>305-100-2000</td>
							<td>chester@tester.com</td>
						</tr>
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