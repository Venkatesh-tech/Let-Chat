import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectiondata } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDfZe9cy-5wZiOw6lwqYSEy80rvzaxiBIY",
  authDomain: "lets-chat-dd7d5.firebaseapp.com",
  projectId: "lets-chat-dd7d5",
  storageBucket: "lets-chat-dd7d5.appspot.com",
  messagingSenderId: "243056853197",
  appId: "1:243056853197:web:a6fffe4e3ecaae1326e984",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
