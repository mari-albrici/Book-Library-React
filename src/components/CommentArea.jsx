import { useState, useEffect } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

let autKey =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGNkYWY4MWI0MjAwMTM5YjI3YjgiLCJpYXQiOjE2ODA1MjQ3MjcsImV4cCI6MTY4MTczNDMyN30.J7SYzg8HcM-FbEKktB2ZQpcgSG_V0O1rpnMM5WvdkV4';

const CommentArea = (props) => {
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const fetchComments = async () => {
		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.id, {
				headers: {
					Authorization: autKey,
				},
			});

			if (response.ok) {
				const fetchedComments = await response.json();
				console.log('FETCHED RESULTS: ', fetchedComments);
				setComments(fetchedComments);
			} else {
				setError(true);
			}
		} catch (error) {
			setError(true);
			setErrorMsg(errorMsg);
		}
	};

	useEffect(() => {
		fetchComments();
	});

	// useEffect(() => {
	// 	fetchComments();
	// }, []);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			{comments.length > 0 && <CommentList comment={comments} />}
			{comments.length <= 0 && <p className="text-muted">There are no comments to be shown yet.</p>}
			<AddComment id={props.id} fetchComments={fetchComments} />
		</>
	);
};

export default CommentArea;
