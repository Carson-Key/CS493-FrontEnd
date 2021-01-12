import { useState } from 'react';
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import firebase from '../../assets/firebase.config.js';

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        const errorString = errorCode + ": " + errorMessage

        console.log(errorString)
      })
  }
  const signUp = () => {
    history.push(`/signup`);
  }
  const googleSignIn = () => {}

  return (
    <div className="flex flex-col flex-wrap h-screen content-center justify-center">
      <TextField id="email" value={email} onChange={setEmail} placeHolder="Email" />
      <TextField id="password" value={password} onChange={setPassword} placeHolder="Password" />
      <Button onClick={signIn}>Sign In</Button>
      <Button onClick={signUp}>Sign Up</Button>
      <Button onClick={googleSignIn}>Sign In With Google</Button>
    </div>
  );
}

export default SignIn;
