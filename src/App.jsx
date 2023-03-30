import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import BookList from './components/BookList';

function App() {
	return (
		<>
			<div className="App">
				<MyNav />
				<Welcome />
				<BookList />
				<MyFooter />
			</div>
		</>
	);
}

export default App;
