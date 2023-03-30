import { Component } from 'react';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/history.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import SingleBook from './SingleBook';

class BookList extends Component {
	state = {
		initialValue: null,
		searchString: '',
		allTheBooks: [...scifi, ...fantasy, ...history, ...horror, ...romance],
	};

	handleChange = (event) => {
		this.setState({ initialValue: event.target.value });
	};

	filterBookList = (event) => {
		this.setState({ searchString: event.target.value });
	};

	render() {
		const { allTheBooks, searchString } = this.state;

		const filteredBooks = allTheBooks.filter((book) => book.title.toLowerCase().includes(searchString.toLowerCase()));

		return (
			<>
				<div className="bg-success bg-opacity-25 p-5">
					<Form onChange={this.handleChange}>
						<FormControl type="text" className="my-3" placeholder="Search a book" onChange={this.filterBookList} />
					</Form>
				</div>

				<Row className="p-5">
					{filteredBooks.map((book) => (
						<Col xs={3} key={`book-${book.category}-${book.asin}`} className="p-3">
							<SingleBook img={book.img} title={book.title} price={book.price} />
						</Col>
					))}
				</Row>
			</>
		);
	}
}

export default BookList;
