import { HashRouter as Router } from 'react-router-dom';
import PageRoutes from './components/PageRoutes';
import Page from './components/Page';
import './assets/main.css';

const App = () => {
  return (
    <Router>
      <Page>
        <PageRoutes />
      </Page>
    </Router>
  );
}

export default App;
