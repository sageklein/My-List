import React, { useState, useContext } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";

export const Header = () => {
	const { isLoggedIn, logout } = useContext(FirebaseContext);

	return (
		<>
			<div className="headerText">
				<h4>Nice List</h4>
				<a
					aria-current="page"
					className="nav-link"
					style={{ cursor: "pointer" }}
					onClick={logout}
				>
					Logout
				</a>
			</div>
		</>
	);
};
