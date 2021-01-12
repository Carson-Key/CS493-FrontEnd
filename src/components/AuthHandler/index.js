import PageRoutes from '../PageRoutes';
import Page from '../Page';
import Store from '../../helpers/AuthContext.js';

const Auth = (props) => {
  return (
    <Page>
      <Store>
        <PageRoutes />
      </Store>
    </Page>
  )
}

export default Auth;
