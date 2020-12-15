import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"
import "./custom.scss";
import { firebaseConfig } from "./components/fbAuth/fireBaseConfig";
import firebase from "firebase/app";
import Login from "./components/fbAuth/Login";
import { FirebaseProvider } from "./components/fbAuth/FirebaseProvider";


firebase.initializeApp(firebaseConfig);
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<FirebaseProvider>
				<App />
			</FirebaseProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
