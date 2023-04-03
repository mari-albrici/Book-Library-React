import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

class CommentList extends Component {
	render() {
		return (
			<>
				<ListGroup>
					{this.props.comment.map((e) => (
						<SingleComment comment={e.comment} />
					))}
				</ListGroup>
			</>
		);
	}
}

export default CommentList;
