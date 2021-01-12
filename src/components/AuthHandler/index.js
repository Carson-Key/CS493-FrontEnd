import { useContext, useEffect } from 'react';
import PageRoutes from '../PageRoutes';
import Page from '../Page';
import { authStates } from '../../helpers/authHelpers.js'
import Store, { AuthContext } from '../../helpers/AuthContext.js'

const Auth = (props) => {
  const { path, children } = props

  return (
    <Page>
      <Store>
        <PageRoutes />
      </Store>
    </Page>
  )
}

export default Auth;
