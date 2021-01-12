export function firebaseErrorMsg(error) {
  const errorCode = error.code
  const errorMessage = error.message

  const errorString = errorCode + ": " + errorMessage

  console.log(errorString)
}
