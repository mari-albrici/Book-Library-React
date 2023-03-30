import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class SingleBook extends Component {
	state = {
		selected: false,
	};

	handleClick = () => {
		this.setState({ selected: !this.state.selected });
	};

	render() {
		const selectedClass = this.state.selected ? 'border border-danger border-3' : '';

		return (
			<Card onClick={this.handleClick} className={selectedClass}>
				<Card.Img variant="top" src={this.props.img} />
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>€{this.props.price}</Card.Text>
					<Button variant="primary">Read</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default SingleBook;
