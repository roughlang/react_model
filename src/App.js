import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

/* pages */
import HomePage from './components/HomePage';
import SecondPage from './components/TestPage';

function App() {
  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;
