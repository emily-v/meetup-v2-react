import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			// Set your fetchs/Ajax requests here.
			// make sure you're using the store: this.state.store

			// Fetch Events
			fetch("https://assets.breatheco.de/apis/fake/meetup/events") // get data as string
				.then(response => {
					if (response.status !== 200) {
						console.log(
							"Connection error, status " + response.status // check for server/connection errors
						);
						return;
					}
					response.json().then(data => {
						// parse string of data to object
						let store = this.state.store; // store is immutable - need to make copy in order to manipulate
						store.events = data;
						this.setState({ store }); // re-set state to copy of fetched data
					});
				})
				.catch(err => {
					console.log("Fetch error: ", err); // check for errors related to fetch
				});

			// Fetch Groups
			fetch("https://assets.breatheco.de/apis/fake/meetup/meetups")
				.then(response => {
					if (response.status !== 200) {
						console.log(
							"Connection error, status " + response.status
						);
						return;
					}
					response.json().then(data => {
						let store = this.state.store;
						store.meetups = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					console.log("Fetch error: ", err);
				});

			// Fetch Session
			fetch("https://assets.breatheco.de/apis/fake/meetup/session")
				.then(response => {
					if (response.status !== 200) {
						console.log(
							"Connection error, status " + response.status
						);
						return;
					}
					response.json().then(data => {
						let store = this.state.store;
						store.session = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					console.log("Fetch error: ", err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
