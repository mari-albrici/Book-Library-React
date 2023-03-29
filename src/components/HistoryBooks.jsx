import { Component } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import history from '../data/history.json';

class HistoryBooks extends Component {
	render() {
		return (
			<Container>
				<Row>
					{history.map((book) => {
						return (
							<Col xs={3} key={`book-${book.asin}`}>
								<Card>
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

export default HistoryBooks;
