import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllTheBooks from './components/AllTheBook';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
	return (
		<>
			<div className="App">
				<MyNav />
				<Welcome />
				<AllTheBooks />
				<MyFooter />
			</div>
		</>
	);
}

export default App;
