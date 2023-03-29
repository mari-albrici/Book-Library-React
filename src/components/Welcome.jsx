import { Container, Card } from 'react-bootstrap';
import bookBackground from '../assets/bookBackground.jpeg';

const Welcome = () => (
	<Container>
		<Card className="bg-dark text-white">
			<Card.Img src={bookBackground} alt="Card image" className="img-fluid" />
			<Card.ImgOverlay>
				<Card.Title className="fs-1 bg-dark">All of the Books</Card.Title>
				<Card.Text className="fs-4 bg-light text-dark">Feed your knowledge with the Epibook library</Card.Text>
			</Card.ImgOverlay>
		</Card>
	</Container>
);

export default Welcome;