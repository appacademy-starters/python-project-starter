import React from "react";

import { useParams } from "react-router-dom";


export const DashboardOrders = () => {
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
								<strong>Orders </strong>
								{/* {activeNonprofit ? activeNonprofit.name : ""} */}
							</h1>
						</div>
						{/* Dashboard content */}
						
                        <div className="container">
			<div className="h-100 p-5 bg-light border rounded-3">
				<h1>Open Orders</h1>
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Date</th>
							<th scope="col">Customer</th>
							<th scope="col">Tier</th>
							<th scope="col">Amount</th>
							<th scope="col">Route</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>001t</td>
							<td>04/01/22</td>
							<td>JDA Flooring</td>
							<td>A</td>
							<td>$300</td>
							<td>South</td>
							<td>In Production</td>
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