import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

let autKey =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGNkYWY4MWI0MjAwMTM5YjI3YjgiLCJpYXQiOjE2ODA1MjQ3MjcsImV4cCI6MTY4MTczNDMyN30.J7SYzg8HcM-FbEKktB2ZQpcgSG_V0O1rpnMM5WvdkV4';

const AddComment = (props) => {
	const [comment, setComment] = useState('');
	const [rate, setRate] = useState('');
	const [elementId, setElementId] = useState(props.id);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [selected, setSelected] = useState(false);

	const pushComments = async () => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
				headers: {
					Authorization: autKey,
					'Content-type': 'application/json; charset=UTF-8',
				},
				method: 'POST',
				body: JSON.stringify({ comment: comment, rate: rate, elementId: elementId }),
			});

			if (response.ok) {
				setComment('');
				setRate('');
				setError(false);
				props.fetchComments();
			}
		} catch (error) {
			setError(true);
			setErrorMsg(errorMsg);
		}
	};

	const handleClick = () => {
		setSelected(!selected);
	};

	const submitComment = (e) => {
		e.preventDefault();
		pushComments();
	};

	const shownStatus = selected ? 'd-block' : 'd-none';

	return (
		<>
			<Button onClick={handleClick}>Add a comment</Button>
			<Form className={shownStatus} onSubmit={submitComment}>
				<Form.Group className="mb-3">
					<Form.Control
						type="text"
						placeholder="Your comment"
						id="commentInput"
						value={comment}
						onChange={(e) => {
							setComment(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Select
						value={rate}
						onChange={(e) => {
							setRate(e.target.value);
						}}
					>
						<option value="null">Select rate</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
						<option value="4">Four</option>
						<option value="5">Five</option>
					</Form.Select>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default AddComment;
