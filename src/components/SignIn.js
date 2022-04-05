import React from 'react'
import {Button} from '@material-ui/core'
import firebase from 'firebase'
import {auth} from '../firebase.js'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
        console.log("Inside the Google Sign in function");
    }

  return (
    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
  )
}

export default SignIn