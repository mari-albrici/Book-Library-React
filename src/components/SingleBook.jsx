import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';
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
			<Card className={selectedClass} id={this.props.id}>
				<Card.Img variant="top" src={this.props.img} style={{ height: '500px' }} onClick={this.handleClick} />
				<Card.Body>
					<Card.Title className="text-truncate">{this.props.title}</Card.Title>
					<Button variant="primary" className="px-3">
						€{this.props.price}
					</Button>
					{this.state.selected && <CommentArea id={this.props.id} />}
				</Card.Body>
			</Card>
		);
	}
}

export default SingleBook;
