import { useState, useContext } from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { firebaseErrorMsg } from '../../helpers/errorHandling.js';
import firebase from '../../assets/firebase.config.js';
import { AuthContext } from '../../helpers/AuthContext.js';
import Page from '../../components/Page';

const SignUp = () => {
  const [state, dispatch] = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  if (state) {}

  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      dispatch({type: 'SET_USER', payload: result.user})
      dispatch({type: 'SET_AUTHSTATE_AUTH'})
      history.push(`/dashboard`)
    })
    .catch((error) => {
      firebaseErrorMsg(error)
    })
  }

  const back = () => {
    history.push(`/`)
  }

  return (
    <Page>
      <div className="flex flex-col flex-wrap content-center justify-center mt-33pr">
        <TextField id="email" className="mb-2" value={email} onChange={setEmail} placeHolder="Email" />
        <TextField id="password" value={password} onChange={setPassword} placeHolder="Password" />
        <div className="flex justify-between my-6">
          <Button black onClick={back}>Back</Button>
          <Button black onClick={signUp}>Sign Up</Button>
        </div>
      </div>
    </Page>
  )
}

export default SignUp
