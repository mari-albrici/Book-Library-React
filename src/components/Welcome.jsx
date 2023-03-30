import { Container, Card } from 'react-bootstrap';
import bookBackground from '../assets/bookBackground.jpeg';

const Welcome = () => (
	<Container fluid className="py-3">
		<Card className="bg-dark text-white border border-0" style={{ height: '200px' }}>
			<Card.Img src={bookBackground} alt="Card image" className="img-fluid" style={{ height: '200px' }} />
			<Card.ImgOverlay>
				<Card.Title className="fs-1 bg-dark">EpiBooks</Card.Title>
				<Card.Text className="fs-4 bg-light text-dark">Feed your knowledge with the Epibook library</Card.Text>
			</Card.ImgOverlay>
		</Card>
	</Container>
);

export default Welcome;
