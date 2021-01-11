import { HashRouter as Router } from 'react-router-dom';
import PageRoutes from './components/PageRoutes';
import './assets/main.css';

const App = () => {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
}

export default App;
