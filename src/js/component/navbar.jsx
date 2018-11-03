import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar bg-dark">
				<h2 className="text-left">
					<Link to="/" className="text-white">
						Let&apos;s Meet
					</Link>
				</h2>
				<button className="btn btn-primary mr-0">Log In</button>
			</nav>
		);
	}
}
