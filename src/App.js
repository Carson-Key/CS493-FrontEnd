import { HashRouter as Router } from 'react-router-dom';
import Auth from './components/AuthHandler';
import './assets/main.css';

const App = () => {
  return (
    <Router>
      <Auth />
    </Router>
  );
}

export default App;
