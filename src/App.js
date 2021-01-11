import { HashRouter as Router } from 'react-router-dom';
import {
  Switch,
  Route
} from "react-router-dom";
import './assets/main.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="h-screen flex flex-wrap content-center justify-center">
            <div className="p-4">1</div>
            <div className="p-4">2</div>
            <div className="p-4">3</div>
          </div>
        </Route>
        <Route path="/wrong">
          <div className="h-screen flex flex-wrap content-center justify-center">
            <div className="p-4">2</div>
            <div className="p-4">3</div>
            <div className="p-4">1</div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
