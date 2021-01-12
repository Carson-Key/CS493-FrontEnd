import { useState } from 'react';
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import firebase from '../../assets/firebase.config.js';

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      const errorString = errorCode + ": " + errorMessage

      console.log(errorString)
    });
  }

  return (
    <div className="flex flex-col flex-wrap h-screen content-center justify-center">
      <TextField id="email" value={email} onChange={setEmail} placeHolder="Email" />
      <TextField id="password" value={password} onChange={setPassword} placeHolder="Password" />
      <Button onClick={signUp}>SignUp</Button>
    </div>
  );
}

export default SignUp;
