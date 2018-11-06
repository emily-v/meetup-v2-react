const getState = scope => {
	return {
		store: {
			events: [],
			meetups: [],
			session: {}
		},
		actions: {
			findMeetupName: meetupID => {
				let store = scope.state.store;
				//if (store.meetups !== []) {
				let meetup = store.meetups.filter((item, index) => {
					if (item.ID == meetupID) {
						return item;
					}
				});
				if (meetup[0] !== undefined) {
					return meetup[0].post_title;
				}
				//}
			}
		}
	};
};

export default getState;
