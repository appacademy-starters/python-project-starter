import React from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonToolbar } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


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
							</h1>
						</div>
						{/* Dashboard content */}
						
                        <div className="container">
			<div className="h-100 p-5 bg-light border rounded-3">
				{/* <h1>Open Orders</h1> */}
				<ButtonToolbar aria-label="Toolbar with button groups">
					<ButtonGroup aria-label="first group">
						<Button active variant="dark">all</Button>
						<Button radio variant="light">open</Button>
						<Button radio variant="light">closed</Button>
					</ButtonGroup>	
					<ButtonGroup aria-label="secondgroup">
					<DropdownButton as={ButtonGroup} title="All Routes" id="bg-nested-dropdown">
						<Dropdown.Item eventKey="1">north</Dropdown.Item>
						<Dropdown.Item eventKey="2">south</Dropdown.Item>
					</DropdownButton>
					</ButtonGroup>
				</ButtonToolbar>
				<Table striped bordered hover responsive="sm" className="table" >
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
				</Table>
			</div>
		</div>
					</div>
				</div>
			</div>
		</>
	);
};