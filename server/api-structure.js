// communityEvents API

// MAKE NEW EVENT (CREATE)
const CREATE_COMMUNITY_EVENT = {
	title: "Create Event",
	description: "API for creating a new event.",
	endPoint: "/community-events",
	request: {
		requestType: 'PUT',
		contentType: "application/json",
		accept: "application/json",
		authorization: null,
		requestBody: null,
	},
	response: {
		responseCode: "201",
		responseType: "application/json",
		jsonObject: {
			id: 1,
			eventType: {
				id: 4,
				type: "JS Social",
				description: "Social networking opportunity for the TJS community.",
				active: true
			},
			ideaConfirmed: true,
			organizer: "Angela Martin Schrute",
			date: "2042-04-23T18:25:43.511Z",
			inPersonEvent: true,
			onlineEvent: false,
			notes: "Should be a two hr long event. Remember to send Zoom link in invites.",
			venue: "Schrute Farms",
			venueContactName: "Dwight Schrute",
			venueContactPhone: "999-123-4567",
			venueContactEmail: "ninjadschrute@schrutefarms.com",
			announcementPosted: true,
			signUpFormSent: true,
			volunteersNeeded: 0,
			volunteerRequestsSent: false
		}	
	},  
}

// EDIT EVENT (PATCH OR PUT)
const EDIT_COMMUNITY_EVENT = {
	title: "Edit Event",
	description: "API for creating a new event.",
	endPoint: "community-event/{id}",
	request: {
		requestType: 'PATCH',
		contentType: "application/json",
		accept: "application/json",
		authorization: null,
		requestBody: {
			jsonObject: {
        id: 1,
        eventType: 4,
        ideaConfirmed: true,
        organizer: "Angela Martin Schrute",
        date: "2042-04-23T18:25:43.511Z",
        inPersonEvent: true,
        onlineEvent: false,
        notes: "Should be a two hr long event. Remember to send Zoom link in invites.",
        venue: "Schrute Farms",
        venueContactName: "Dwight Schrute",
        venueContactPhone: "999-123-4567",
        venueContactEmail: "ninjadschrute@schrutefarms.com",
        announcementPosted: true,
        signUpFormSent: true,
        volunteersNeeded: 0,
        volunteerRequestsSent: false
      }	
		},
	},
	response: {
		responseCode: "201",
		jsonObject: {
			id: 1,
			eventType: {
				id: 4,
				type: "JS Social",
				description: "Social networking opportunity for the TJS community.",
				active: true
			},
			ideaConfirmed: true,
			organizer: "Angela Martin Schrute",
			date: "2042-04-23T18:25:43.511Z",
			inPersonEvent: true,
			onlineEvent: false,
			notes: "Should be a two hr long event. Remember to send Zoom link in invites.",
			venue: "Schrute Farms",
			venueContactName: "Dwight Schrute",
			venueContactPhone: "999-123-4567",
			venueContactEmail: "ninjadschrute@schrutefarms.com",
			announcementPosted: true,
			signUpFormSent: true,
			volunteersNeeded: 0,
			volunteerRequestsSent: false
		}	
	},  
}

// DELETE EVENT
const DELETE_COMMUNITY_EVENT = {
	title: "Delete Event",
	description: "API for creating a deleting event.",
	endPoint: "community-event/{id}",
	request: {
		requestType: 'DELETE',
		contentType: "application/json",
		accept: "application/json",
		authorization: null,
	},
	response: {
		responseCode: "204",
	},  
}

// GET A SINGLE EVENT (READ)
const SINGLE_COMMUNITY_EVENT = {
  title: "Get Community Event",
	description: "API for getting a community event.",
	endPoint: "community-events/{id}",
	request: {
		requestType: 'GET',
		authorization: null,
	},
  response: {
		responseCode: "200",
    responseType: "application/json", //an array of json objects for the list view
		jsonObject: {
			id: 1,
			eventType: {
				id: 4,
				type: "JS Social",
				description: "Social networking opportunity for the TJS community.",
				active: true
			},
			ideaConfirmed: true,
			organizer: "Angela Martin Schrute",
			date: "2042-04-23T18:25:43.511Z",
			inPersonEvent: true,
			onlineEvent: false,
			notes: "Should be a two hr long event. Remember to send Zoom link in invites.",
			venue: "Schrute Farms",
			venueContactName: "Dwight Schrute",
			venueContactPhone: "999-123-4567",
			venueContactEmail: "ninjadschrute@schrutefarms.com",
			announcementPosted: true,
			signUpFormSent: true,
			volunteersNeeded: 0,
			volunteerRequestsSent: false
		}
  }
}

// GET LIST OF ALL EVENTS (READ LIST)
const COMMUNITY_EVENT_LIST = {
  title: "Create Community Events List",
	description: "API for getting an array of all community events.",
	endPoint: "community-events/",
	request: {
		requestType: 'GET',
		authorization: null,
	},
  response: {
		responseCode: "200",
    responseType: ["application/json"], //an array of json objects for the list view
		arrayOfJson: [
			{
				id: 1,
				eventType: {
					id: 4,
					type: "JS Social",
					description: "Social networking opportunity for the TJS community.",
					active: true
				},
				ideaConfirmed: true,
				organizer: "Angela Martin Schrute",
				date: "2042-04-23T18:25:43.511Z",
				inPersonEvent: true,
				onlineEvent: false,
				notes: "Should be a two hr long event. Remember to send Zoom link in invites.",
				venue: "Schrute Farms",
				venueContactName: "Dwight Schrute",
				venueContactPhone: "999-123-4567",
				venueContactEmail: "ninjadschrute@schrutefarms.com",
				announcementPosted: true,
				signUpFormSent: true,
				volunteersNeeded: 0,
				volunteerRequestsSent: false
			},
      {
        id: 2,
        eventType: {
          id: 1,
          type: "JS Group Programming",
          description: "lorem ipsum.",
          active: true
        },
        ideaConfirmed: true,
        organizer: "Jane Doe",
        date: "2042-04-23T18:25:43.511Z",
        inPersonEvent: true,
        onlineEvent: false,
        notes: "lorem ipsum.",
        venue: "Wherever",
        venueContactName: "Whoever",
        venueContactPhone: "999-123-4567",
        venueContactEmail: "who@ever.com",
        announcementPosted: true,
        signUpFormSent: true,
        volunteersNeeded: 0,
        volunteerRequestsSent: false
      }
    ]
  }
}

