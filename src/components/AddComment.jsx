import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

let autKey =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGNkYWY4MWI0MjAwMTM5YjI3YjgiLCJpYXQiOjE2ODA1MjQ3MjcsImV4cCI6MTY4MTczNDMyN30.J7SYzg8HcM-FbEKktB2ZQpcgSG_V0O1rpnMM5WvdkV4';

class AddComment extends Component {
	state = {
		comment: '',
		rate: '',
		error: false,
		errorMsg: '',
		selected: false,
	};

	pushComments = async () => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
				headers: {
					Authorization: autKey,
					'Content-type': 'application/json; charset=UTF-8',
				},
				method: 'POST',
				body: JSON.stringify({ comment: this.state.comment, rate: this.state.rate, elementId: this.props.id }),
			});

			if (response.ok) {
				this.setState({ comment: '', rate: '' });
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

	handleChange = (propertyName, propertyValue) => {
		this.setState({
			[propertyName]: propertyValue,
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
							value={this.state.comment}
							onChange={(e) => {
								this.handleChange('comment', e.target.value);
							}}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Select
							aria-label="Default select example"
							value={this.state.rate}
							onChange={(e) => {
								this.handleChange('rate', e.target.value);
							}}
						>
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
	}
}

export default AddComment;
