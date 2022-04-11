import React, { useContext } from "react";

import { useParams } from "react-router-dom";


export const DashboardProducts = () => {
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
			<div className="w-100 d-flex p-4">
				<div className="w-100 h-100 p-2 rounded-3">
					<div className="dashboard-page">
						{/* title section */}
						<div className="title-area container-fluid p-2">
							<h1>
								<strong>Products </strong>
							</h1>
						</div>
						{/* Dashboard content */}
						
                        <div className="container">
			<div className="h-100 p-5 bg-light border rounded-3">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Product ID</th>
							<th scope="col">Name</th>
							<th scope="col">Material</th>
							<th scope="col">Description</th>
					
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>001</td>
							<td>Deco StairNose</td>
							<td>Vinyl</td>
							<td>somewthing here or not</td>
						
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