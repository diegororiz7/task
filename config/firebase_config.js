//importações referentes ao firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//configurações referentes ao Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB9CPsx7YDEJ1ft4VdFaT1fzzCNHboUUfQ",
    authDomain: "task-dcf9a.firebaseapp.com",
    projectId: "task-dcf9a",
    storageBucket: "task-dcf9a.firebasestorage.app",
    messagingSenderId: "654961617810",
    appId: "1:654961617810:web:8f68c582e4b1363f672f4b"
  };

//verificar se já foi inicializado
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

//Inicializa o Firebase
const database = firebase.firestore();

//exportar database
export default database;
