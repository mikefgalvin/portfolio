import './App.css';
import Projects from './components/Projects';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" >
      <header className="App-header">
      <Link to='/' 
              style={{ textDecoration: 'none', color: 'white', padding: '2%' }}>
              Mike Galvin</Link>
        <nav>
        <Link to='./about' 
              style={{ textDecoration: 'none', color: 'white', padding: '2%' }}>
              About</Link>
        <Link to='/projects' 
              style={{ textDecoration: 'none', color: 'white', padding: '2%' }}>
              Projects</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
