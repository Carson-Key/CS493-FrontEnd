import { useState, useContext } from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { firebaseErrorMsg } from '../../helpers/errorHandling.js';
import firebase from '../../assets/firebase.config.js';
import { AuthContext } from '../../helpers/AuthContext.js';

let googleProvider = new firebase.auth.GoogleAuthProvider();

const SignIn = () => {
  const [state, dispatch] = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({type: 'SET_USER', payload: result.user})
        dispatch({type: 'SET_AUTHSTATE_AUTH'})
        history.push(`/dashboard`)
      })
      .catch((error) => {
        firebaseErrorMsg(error)
      })
  }
  const signUp = () => {
    history.push(`/signup`)
  }
  const googleSignIn = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        dispatch({type: 'SET_USER', payload: result.user})
        dispatch({type: 'SET_AUTHSTATE_AUTH'})
        history.push(`/dashboard`)
      }).catch((error) => {
        firebaseErrorMsg(error)
      })
  }

  return (
    <div className="flex flex-col flex-wrap content-center justify-center mt-33pr">
      <TextField id="email" className="mb-2" value={email} onChange={setEmail} placeHolder="Email" />
      <TextField id="password" value={password} onChange={setPassword} placeHolder="Password" />
      <div className="flex justify-between my-6">
        <Button black onClick={signIn}>Sign In</Button>
        <Button black onClick={signUp}>Sign Up</Button>
      </div>
      <Button blue onClick={googleSignIn}>Sign In With Google</Button>
    </div>
  );
}

export default SignIn
