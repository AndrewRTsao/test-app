import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Dogs from './pages/dogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import useCommandBar from './useCommandBar';

function App() {
  return (
    <Router>
      <AppComponent/>
    </Router>
  )

}

function AppComponent() {
  useCommandBar();
	return (
    <div className="App">
      <Navbar />
      <Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/dogs' element={<Dogs />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
    </div>
  )
};

export default App;
