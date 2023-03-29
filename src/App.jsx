import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import { Button } from 'react-bootstrap';
import RomanceBooks from './components/RomanceBooks';
import HistoryBooks from './components/HistoryBooks';
import ScifiBooks from './components/ScifiBooks';
import HorrorBooks from './components/HorrorBooks';
import FantasyBooks from './components/FantasyBooks';

function App() {
	const [showComponent, setShowComponent] = useState(false);

	const handleClick = () => {
		setShowComponent(!showComponent);
	};

	return (
		<>
			<div className="App">
				<MyNav />
				<Welcome />
				<h5>Choose a category:</h5>

				<Button className="btn-primary mx-3" onClick={handleClick}>
					Romance {showComponent ? <RomanceBooks /> : null}
				</Button>

				<Button className="btn-success mx-3" onClick={handleClick}>
					Sci-Fi {showComponent ? <ScifiBooks /> : null}
				</Button>

				<Button className="btn-danger mx-3" onClick={handleClick}>
					Horror {showComponent ? <HorrorBooks /> : null}
				</Button>

				<Button className="btn-warning mx-3" onClick={handleClick}>
					Fantasy {showComponent ? <FantasyBooks /> : null}
				</Button>

				<Button className="btn-dark mx-3" onClick={handleClick}>
					History {showComponent ? <HistoryBooks /> : null}
				</Button>

				<MyFooter />
			</div>
		</>
	);
}

export default App;
