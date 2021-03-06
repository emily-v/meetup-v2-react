import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import Card from "../component/card.jsx";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		/*function parseMoment(data, format) => {
			return(
				<Moment>{data}</Moment>
			);
		};*/

		return (
			<div className="container-fluid px-0">
				<div className="jumbotron">
					<h1>Your LET&apos;S MEET feed</h1>
				</div>
				<div className="row">
					<div className="col-md-6 mx-auto">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.events.map(event => {
									if (event) {
										return (
											<Card
												eventDate={event.meta_keys.day}
												eventTime={event.meta_keys.time}
												eventTitle={event.post_title}
												meetupID={actions.findMeetupName(
													event.meta_keys._meetup
												)}
												key={event.ID}
											/>
										);
									} else {
										return <h5>Loading...</h5>;
									}
								});
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
