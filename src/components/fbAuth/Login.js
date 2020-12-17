import React, { useState, useContext } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
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
	console.log("hello")
	return (
		<Form className="Form" onSubmit={loginSubmit}>
			<div className="fieldset">
				<Form.Group as={Row} controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Email
					</Form.Label>
					<Col sm="10">
						<Form.Control
							plaintext
							readOnly
							defaultValue="email@example.com"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formPlaintextPassword">
					<Form.Label column sm="2">
						Password
					</Form.Label>
					<Col sm="10">
						<Form.Control
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
				<div className="or">- or -</div>
				<Button onClick={loginGoogle} varient="Link">
					Login with Google
				</Button>

				<em>
					<div className="register">
						Not registered? <Link to="register">Register</Link>
					</div>
				</em>
			</div>
		</Form>
	);
}
