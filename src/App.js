import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SingleBook from './pages/SingleBook';

function App() {
  return (
    <h1>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </h1>
  );
}

export default App;
