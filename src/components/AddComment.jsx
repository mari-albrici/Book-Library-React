import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddComment extends Component {

handleClick = () => {
    return ()
}

	render() {
		return (
			<>
				<Button onClick={handleClick}>Add a comment</Button>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Comment</Form.Label>
						<Form.Control type="text" placeholder="Your comment" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</>
		);
	}
}

export default AddComment;
