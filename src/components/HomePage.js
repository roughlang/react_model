import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="fade-in">
      <h1>HomePage</h1>
      <Link to="/test" className="App-link">Test Page</Link>
    </div>
  );
}

export default HomePage;