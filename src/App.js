import logo from './logo.svg';
import './App.css';

//importing react router so we can have multiple pages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ArtificialPlantPage} from './components/pages/artificial-plants/index';
import { LoginPage} from './components/pages/login/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/ArtificialPlantPage">
            <ArtificialPlantPage></ArtificialPlantPage>
          </Route>
          <Route exact path="/LoginPage">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
