import PageRoutes from '../PageRoutes';
import Store from '../../helpers/AuthContext.js';

const Auth = (props) => {
  return (
    <Store>
      <PageRoutes />
    </Store>
  )
}

export default Auth;
