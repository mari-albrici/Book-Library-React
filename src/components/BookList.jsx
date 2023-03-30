import { Component } from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import fantasy from '../data/fantasy';
import history from '../data/history';
import horror from '../data/history';
import romance from '../data/romance';
import scifi from '../data/scifi';
import SingleBook from './SingleBook';

class BookList extends Component {
	books = [...scifi, ...romance, ...horror, ...history, ...fantasy];

	state = {
		initialValue: null,
		booksTitles: this.books.title,
	};

	handleChange = (e) => {
		this.setState({ initialValue: e.target.value });
	};

	render() {
		return (
			<>
				<Container className="py-3">
					<Form>
						<FormControl type="text" placeholder="Choose a category" onChange={this.handleChange} />
					</Form>
				</Container>
				<Container>
					<Row>
						{this.books.map((book) => {
							return (
								<Col xs={3} key={`book-${book.asin}`}>
									<SingleBook img={book.img} title={book.title} price={book.price} />
								</Col>
							);
						})}
					</Row>
				</Container>
				{this.state.booksTitles === this.handleChange.value && (
					<Container>
						<Row>
							{this.books.map((book) => {
								return (
									<Col xs={3} key={`book-${book.asin}-${book.category}`}>
										<SingleBook img={book.img} title={book.title} price={book.price} />
									</Col>
								);
							})}
						</Row>
					</Container>
				)}
			</>
		);
	}
}

export default BookList;
