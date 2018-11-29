"use strict";

import {action, observable} from "mobx";

const URL = "http://ec2-18-217-242-211.us-east-2.compute.amazonaws.com:3000/api/events/ownerEvents";


/**
 * Current Event State
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
export class CurrentEventState {

  @observable title = "Current Events";
  @observable data = {
    events: []
  };

  @observable selectedEventId;

  @action
  async fetchEvents(internalId) {
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner: internalId,
          completed: false
        })
      });
      console.log(response);
      let responseJson = await response.json();
      this.data.events = responseJson;
      console.log(responseJson);
    } catch (error) {
      console.log(error);
    }
  }

}