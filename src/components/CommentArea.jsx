import { Component } from 'react';
// import AddComment from './AddComment';
import CommentList from './CommentList';

let autKey =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGNkYWY4MWI0MjAwMTM5YjI3YjgiLCJpYXQiOjE2ODA1MjQ3MjcsImV4cCI6MTY4MTczNDMyN30.J7SYzg8HcM-FbEKktB2ZQpcgSG_V0O1rpnMM5WvdkV4';

class CommentArea extends Component {
	state = {
		comments: [],
		error: false,
		errorMsg: '',
	};

	fetchComments = async () => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.id, {
				headers: {
					Authorization: autKey,
				},
			});

			if (response.ok) {
				const fetchedComments = await response.json();
				console.log('FETCHED RESULTS: ', fetchedComments);
				this.setState({ comments: fetchedComments });
			} else {
				this.setState({ error: true });
			}
		} catch (error) {
			this.setState({ error: true, errorMsg: error.message });
		}
	};

	componentDidMount() {
		this.fetchComments();
	}

	render() {
		return (
			<>
				{this.state.comments.length > 0 && <CommentList comment={this.state.comments} />}
				{this.state.comments.length <= 0 && <p className="text-muted">There are no comments to be shown yet.</p>}
			</>
		);
	}
}

export default CommentArea;
