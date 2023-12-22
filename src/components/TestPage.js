import { Link } from 'react-router-dom';

function TestPage() {
    return (
      <div className="fade-in">
        <h1>TestPage</h1>
        <Link to="/" className="App-link">Home Page</Link>
      </div>
    );
  }
  export default TestPage;