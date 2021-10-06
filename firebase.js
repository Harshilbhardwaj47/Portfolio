// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0B1n5SPEr-PbBXoUqjZeaMD1qBv1oWLg",
  authDomain: "portfolio-1e00c.firebaseapp.com",
  projectId: "portfolio-1e00c",
  storageBucket: "portfolio-1e00c.appspot.com",
  messagingSenderId: "595395473158",
  appId: "1:595395473158:web:249a20920c3c0557c87887"
};

let app;
if(firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}

else 
{
    app = firbase.app()
}

const auth = firbase.auth()

export {auth};