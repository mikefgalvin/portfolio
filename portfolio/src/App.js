import './App.css';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './assets/logo.png';




function App() {
  return (
    <Router>
    <div className="App" >
      <header className="App-header">
      <Link to='/' 
            style={{ textDecoration: 'none'}} >
              {/* <h2 className='logo'>Mike Galvin</h2> */}
              <img className='logo' src={logo} alt='logo'/>
              </Link>
      </header>
        <nav>
        <Link className='navLink' to='./about' 
              style={{ textDecoration: 'none', color: 'whitesmoke', padding: '2%' }}>
              About</Link>
        <Link className='navLink' to='/projects' 
              style={{ textDecoration: 'none', color: 'whitesmoke', padding: '2%' }}>
              Projects</Link>
        <Link className='navLink' to='/resume' 
              style={{ textDecoration: 'none', color: 'whitesmoke', padding: '2%' }}>
              Resume</Link>
        </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
