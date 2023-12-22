import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

import HeaderBlock from './components/common/HeaderBlock.js';
import FooterBlock from './components/common/FooterBlock.js';

/* pages */
import HomePage from './components/HomePage';
import SecondPage from './components/TestPage';

function App() {
  return (
    <Router>
      <HeaderBlock />
      <Routes>{routes}</Routes>
      <FooterBlock />
    </Router>
  );
}

export default App;
