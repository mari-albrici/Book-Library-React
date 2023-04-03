import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

let autKey =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGNkYWY4MWI0MjAwMTM5YjI3YjgiLCJpYXQiOjE2ODA1MjQ3MjcsImV4cCI6MTY4MTczNDMyN30.J7SYzg8HcM-FbEKktB2ZQpcgSG_V0O1rpnMM5WvdkV4';
class AddComment extends Component {
	state = {
		comment: '',
		error: false,
		errorMsg: '',
		selected: false,
	};

	pushComments = async () => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.id, {
				headers: {
					Authorization: autKey,
					'Content-type': 'application/json; charset=UTF-8',
				},
				Method: 'POST',
				Body: JSON.stringify(this.state.comment),
			});

			if (response.ok) {
				this.setState({ comment: '' });
			}
		} catch (error) {
			this.setState({ error: true, errorMsg: error.message });
		}
	};

	handleClick = () => {
		this.setState({ selected: !this.state.selected });
	};

	submitComment = (e) => {
		e.preventDefault();
		this.pushComments();
	};

	handleChange = (propertyValue) => {
		this.setState({
			comment: propertyValue,
		});
	};

	render() {
		const shownStatus = this.state.selected ? 'd-block' : 'd-none';

		return (
			<>
				<Button onClick={this.handleClick}>Add a comment</Button>
				<Form className={shownStatus} onSubmit={this.submitComment}>
					<Form.Group className="mb-3">
						<Form.Control
							type="text"
							placeholder="Your comment"
							id="commentInput"
							onChange={(e) => {
								this.handleChange(e.target.value);
							}}
						/>
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
