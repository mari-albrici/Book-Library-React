import { Badge, ListGroup, Button } from 'react-bootstrap';

let autKey =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGNkYWY4MWI0MjAwMTM5YjI3YjgiLCJpYXQiOjE2ODA1MjQ3MjcsImV4cCI6MTY4MTczNDMyN30.J7SYzg8HcM-FbEKktB2ZQpcgSG_V0O1rpnMM5WvdkV4';

const SingleComment = (props) => {
	const deleteComment = async () => {
		try {
			let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.id, {
				method: 'DELETE',
				headers: {
					Authorization: autKey,
				},
			});
			if (response.ok) {
				alert('Comment was deleted successfully!');
			} else {
				alert('Error - comment was NOT deleted!');
			}
		} catch (error) {
			alert('Error - comment was NOT deleted!');
		}
	};

	return (
		<>
			<ListGroup.Item>
				<ListGroup>
					<ListGroup.Item className="text-muted">{props.author}</ListGroup.Item>
					<ListGroup.Item>
						<span className="mx-3"> {props.comment}</span>
						{props.rate >= 4 && <Badge className="bg-success text-light px-2">{props.rate}</Badge>}
						{props.rate === 3 && <Badge className="bg-warning text-light px-2">{props.rate}</Badge>}
						{props.rate < 3 && <Badge className="bg-danger text-light px-2">{props.rate}</Badge>}
						<span>
							<Button variant="danger" className="ml-2" onClick={() => deleteComment(props.comment._id)}>
								Delete
							</Button>
						</span>
					</ListGroup.Item>
				</ListGroup>
			</ListGroup.Item>
		</>
	);
};

export default SingleComment;
