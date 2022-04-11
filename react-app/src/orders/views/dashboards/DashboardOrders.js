import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useState } from "react";


export const DashboardOrders = () => {
	const params = useParams();

	// const { store, actions } = useContext(Context);
	let { id } = useParams();

	// const formatter = new Intl.NumberFormat("en-US", {
	// 	style: "currency",
	// 	currency: "USD",
	// 	minimumFractionDigits: 0
	// });
	const [key, setKey] = useState('home');

	return (
		<>
			<div className="w-100 d-flex p-4">
				<div className="w-100 h-100 p-2 rounded-3">
					<div className="dashboard-page">
						<div className="title-area container-fluid p-2">
							<h1>
								<strong>Orders </strong>
							</h1>
						</div>

						{/* Dashboard content */}
						
                        <Container>	
					
							<div className="h-100 p-5 bg-light border rounded-3">
							<Row>
								<Col>
									<Button href="/new-order" variant="dark" className="mb-3">
										+new order
									</Button>
								</Col>
								<Col>
									<Button variant="light" >
										Print View
									</Button>
								</Col>
							</Row>

								<Tabs
									id="controlled-tab-example"
									activeKey={key}
									onSelect={(k) => setKey(k)}
									className="mb-3"
								>
								
									<Tab eventKey="home" title="all">
										<Table striped bordered hover responsive="lg" className="table" >
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
													<td>001</td>
													<td>04/01/22</td>
													<td>JDA Flooring</td>
													<td>A</td>
													<td>$300</td>
													<td>South</td>
													<td>In Production</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td>002</td>
													<td>04/01/22</td>
													<td>Joel Floors</td>
													<td>C</td>
													<td>$100</td>
													<td>South</td>
													<td>In Production</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td>003</td>
													<td>04/01/22</td>
													<td>Carlos Store</td>
													<td>B</td>
													<td>$80</td>
													<td>Orlando</td>
													<td>Ready</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td>004</td>
													<td>04/01/22</td>
													<td>Best Flooring</td>
													<td>D</td>
													<td>$500</td>
													<td>North</td>
													<td>Completed</td>
												</tr>
											</tbody>
										</Table>
									</Tab>
								
									<Tab eventKey="profile" title="open">
									{/* map orders with status set to in production and ready */}
										<Table striped bordered hover responsive="lg" className="table" >
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
													<td>001</td>
													<td>04/01/22</td>
													<td>JDA Flooring</td>
													<td>A</td>
													<td>$300</td>
													<td>South</td>
													<td>In Production</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td>003</td>
													<td>04/01/22</td>
													<td>Carlos Store</td>
													<td>B</td>
													<td>$80</td>
													<td>Orlando</td>
													<td>Ready</td>
												</tr>
											</tbody>
										</Table>
									</Tab>
								
									<Tab eventKey="contact" title="closed">
										{/* map orders with status set to completed */}
										<Table striped bordered hover responsive="lg" className="table" >
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
													<td>001</td>
													<td>04/01/22</td>
													<td>JDA Flooring</td>
													<td>A</td>
													<td>$300</td>
													<td>South</td>
													<td>Completed</td>
												</tr>
											</tbody>
										</Table>
									</Tab>
								</Tabs>
						
							</div>
						</Container>
					</div>
				</div>
			</div>
		</>
	);
};