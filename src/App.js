import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { Header } from "./components/Header";
import { FirebaseProvider } from "./components/fbAuth/FirebaseProvider";

function App() {
	return (
		<>
			<div className="wrapper">
				<div className="snow layer4 a"></div>
				<div className="snow layer4"></div>
				<div className="snow layer1 a"></div>
				<div className="snow layer1"></div>
				<div className="snow layer2 a"></div>
				<div className="snow layer2"></div>
				<div className="snow layer3 a"></div>
				<div className="snow layer3"></div>

				<div className="content">
					<h1>Merry Christmas</h1>
					<Router>
						<FirebaseProvider>
							<Header />
							<ApplicationViews />
						</FirebaseProvider>
					</Router>
				</div>
			</div>
		</>
	);
}

export default App;
