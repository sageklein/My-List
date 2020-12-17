import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";
import Login from "./fbAuth/Login";
import Register from "./fbAuth/Register";
import BASE from "../../src/env";
// import ChrisListAddForm from "./ChrisListAddForm";
import { ChrisList } from "./journal/ChrisList";
import { ChrisListAddForm } from "./journal/ChrisListAddForm";



export default function ApplicationViews() {
  const { isLoggedIn } = useContext(FirebaseContext);

  return (
		<main>
			<Switch>
				<Route exact path={`${BASE}/`}>
					{isLoggedIn ? (
						<ChrisList />
					) : (
						<Redirect to={`${BASE}/login`} />
					)}
				</Route>

				<Route path={`${BASE}/add`}>
					{isLoggedIn ? (
						<ChrisListAddForm />
					) : (
						<Redirect to="/login" />
					)}
				</Route>

				<Route path={`${BASE}/login`}>
					<Login />
				</Route>

				<Route path={`${BASE}/register`}>
					<Register />
				</Route>
			</Switch>
		</main>
  );
};