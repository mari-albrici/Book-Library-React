import { Component } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';

class FantasyBooks extends Component {
	render() {
		return (
			<Container>
				<Row>
					{fantasy.map((book) => {
						return (
							<Col xs={3}>
								<Card key={`book-${book.asin}`}>
									<Card.Img variant="top" src={book.img} />
									<Card.Body>
										<Card.Title>{book.title}</Card.Title>
										<Card.Text>€{book.price}</Card.Text>
										<Button variant="primary">Read</Button>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export default FantasyBooks;
