// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import style from '../../assets/css/style.scss';
import Button from '@mui/material/Button';

function Header() {
    return (
      <div>
        <h1 className="title">React model</h1>
        <Link to="/">Home</Link> | <Link to="/test">Test</Link> | <Link to="/sub1">Sub1</Link>
      </div>
    );
  }
  export default Header;