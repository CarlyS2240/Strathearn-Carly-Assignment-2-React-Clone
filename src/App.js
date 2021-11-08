import logo from './logo.svg';
import './App.css';

//importing react router so we can have multiple pages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/ArtificialPlantPage">
            <div>Artificial Plant Page</div>
          </Route>
          <Route exact path="/secondpage">
            <div>Second Page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
