import logo from './logo.svg';
import './App.css';

/* Importing react router so we can have multiple pages */
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Importing our page components */
import { ArtificialPlantPage} from './components/pages/artificial-plants/index';
import { LoginPage} from './components/pages/login/index';

/* Displaying our page components in the App*/
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
