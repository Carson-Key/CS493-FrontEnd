import { useState, useContext } from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { firebaseErrorMsg } from '../../helpers/errorHandling.js';
import firebase from '../../assets/firebase.config.js';
import { AuthContext } from '../../helpers/AuthContext.js';

const SignUp = () => {
  const [state, dispatch] = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

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

  return (
    <div className="flex flex-col flex-wrap h-screen content-center justify-center">
      <TextField id="email" value={email} onChange={setEmail} placeHolder="Email" />
      <TextField id="password" value={password} onChange={setPassword} placeHolder="Password" />
      <Button onClick={signUp}>Sign Up</Button>
    </div>
  )
}

export default SignUp
