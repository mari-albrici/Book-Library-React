import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentList = (props) => {
	return (
		<>
			<ListGroup>
				{props.comment.map((e) => (
					<SingleComment comment={e.comment} author={e.author} rate={e.rate} id={e._id} />
				))}
			</ListGroup>
		</>
	);
};

export default CommentList;
