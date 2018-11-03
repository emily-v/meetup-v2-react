import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import Card from "../component/card.jsx";
import "../../styles/demo.css";

export class Group extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron">
					<div className="row">
						<div className="col col-sm-4 col-md-6">
							<img
								src="http://via.placeholder.com/600x350"
								className="img-fluid"
							/>
						</div>
						<div className="col">
							<h2>Name of Meetup Group</h2>
							<h4>Miami, FL</h4>
						</div>
					</div>
				</div>
				<div className="row">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		);
	}
}

{
	/*<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.demo.map((item, index) => {
								return (
									<li
										key={index}
										className="list-group-item d-flex justify-content-between"
										style={{ background: item.background }}>
										<Link to={"/single/" + index}>
											<span>Link to: {item.title}</span>
										</Link>
										<p style={{ color: item.initial }}>
											{
												"Check store/store.js scroll to the actions to see the code "
											}
										</p>
										<button
											className="btn btn-success"
											onClick={() =>
												actions.changeColor(
													index,
													"orange"
												)
											}>
											Change Color
										</button>
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>*/
}
