import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = (props) => {
	const [selected, setSelected] = useState(false);

	const handleClick = () => {
		setSelected(!selected);
	};

	const selectedClass = selected ? 'border border-danger border-3' : '';

	return (
		<Card className={selectedClass} id={props.id}>
			<Card.Img variant="top" src={props.img} style={{ height: '500px' }} onClick={handleClick} />
			<Card.Body>
				<Card.Title className="text-truncate">{props.title}</Card.Title>
				<Button variant="primary" className="px-3">
					€{props.price}
				</Button>
				{selected && <CommentArea id={props.id} />}
			</Card.Body>
		</Card>
	);
};

export default SingleBook;
