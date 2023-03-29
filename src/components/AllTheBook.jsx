import { Component } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import romance from '../data/romance.json';

class AllTheBooks extends Component() {
	state = {
		initialValue: null,
	};
	render() {
		return (
			<Container>
				<Row>
					<Col xs={3}>
						{romance.map((book, index) => {
							return (
								<Card>
									<Card.Img variant="top" src="holder.js/100px180" />
									<Card.Body>
										<Card.Title>{book.title}</Card.Title>
										<Card.Text>`€{book.price}`</Card.Text>
										<Button variant="primary">Read</Button>
									</Card.Body>
								</Card>
							);
						})}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default AllTheBooks;
