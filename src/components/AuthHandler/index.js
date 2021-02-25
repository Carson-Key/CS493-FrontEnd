import PageRoutes from '../PageRoutes';
import AuthStore from '../../helpers/AuthContext.js';
import ArtistStore from '../../helpers/ArtistContext.js';

const Auth = (props) => {
  return (
    <AuthStore>
      <ArtistStore>
        <PageRoutes />
      </ArtistStore>
    </AuthStore>
  )
}

export default Auth;
