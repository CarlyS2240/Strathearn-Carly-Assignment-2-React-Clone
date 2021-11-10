import logo from './logo.svg';
import './App.css';

//importing react router so we can have multiple pages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar/index';
import { Header} from './components/header/index';
import { ArtificialPlantPage} from './components/pages/artificial-plants/index';
import { LoginPage} from './components/pages/login/index';
import { ProductCard} from './components/card/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/ArtificialPlantPage">
            <ArtificialPlantPage>
              <ProductCard></ProductCard>
            </ArtificialPlantPage>
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
