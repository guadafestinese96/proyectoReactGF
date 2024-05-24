import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4Uslc0a9zg37lpKuAu4uW_-JUfwMVcx0",
  authDomain: "widistorefbreact.firebaseapp.com",
  projectId: "widistorefbreact",
  storageBucket: "widistorefbreact.appspot.com",
  messagingSenderId: "415690217605",
  appId: "1:415690217605:web:b2d692d9b743d78d0271ec"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
)
