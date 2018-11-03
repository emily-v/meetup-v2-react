import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

function Card(props) {
	return (
		<div className="col col-sm-6 col-md-4">
			<Context.Consumer>
				{({ store }) => {
					return (
						<div className="card">
							<h2 className="card-header">
								<Moment format="MMMM D">
									{props.eventDate}
								</Moment>
							</h2>
							<div className="card-body">
								<div className="row">
									<div className="col-4">
										<h3>{props.eventTime}</h3>
									</div>
									<div className="col">
										<h3>
											<Link
												to="/eventPage:theid"
												className="text-dark">
												{props.eventTitle}
											</Link>
										</h3>
										<h4>
											<Link
												to="/group:theid"
												className="text-dark">
												{props.meetupID}
											</Link>
										</h4>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
}

Card.propTypes = {
	eventDate: PropTypes.string,
	eventTime: PropTypes.string,
	eventTitle: PropTypes.string,
	meetupID: PropTypes.string
};

export default Card;

// function to find meetup name:
// -use id of meetup
// -find that id's index in store.meetups
// -return store.meetups[i].post_title
