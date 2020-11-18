import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getAll } from "./modules/APICalls";

export const List = () => {
	const [array, setArray] = useState([]);

	useEffect(() => {
		getAll().then((data) => {
			setArray(data);
		});
	}, []);

	return (
		<>
			<h4>List</h4>
			<Container>
				<Row>
					{array.map((person) => {
						return (
							<Col key={person.id} className="bgcolor" xs={12}>
								<h5>{person.name}</h5>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};
