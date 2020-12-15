import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { FirebaseContext } from "./FirebaseProvider";

export default function Login() {
	const history = useHistory();
	const { login } = useContext(FirebaseContext);
	const { signInWithGoogle } = useContext(FirebaseContext);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const loginSubmit = (e) => {
		e.preventDefault();
		login(email, password)
			.then(() => history.push("/"))
			.catch(() => alert("Invalid email or password"));
	};

	const loginGoogle = () => {
		signInWithGoogle().then((response) => history.push("/"));
	};

	return (
		<Form className="Form" onSubmit={loginSubmit}>
			<fieldset>
				<Form.Group controlId="formPlaintextPassword">
					<Form.Label>Email: </Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Password: </Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
				<div className="or">
					- or -
				</div>
				<Button onClick={loginGoogle} variant="link">
					Login with Google
				</Button>

				<em>
					<div className="register">
						Not registered? <Link to="register">Register</Link>
					</div>
				</em>
			</fieldset>
		</Form>
	);
}
