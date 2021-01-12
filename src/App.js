import { HashRouter as Router } from 'react-router-dom';
import Auth from './components/AuthHandler';
import './assets/main.css';
import './assets/misc.css';

const App = () => {
  return (
    <Router>
      <Auth />
    </Router>
  );
}

export default App;
