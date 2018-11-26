"use strict";

import {styles} from "./NewEventStyle";
import React, { Component } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { Button, TextInput, Appbar } from "react-native-paper";
import { inject, observer } from "mobx-react";

/**
 * New Event Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class NewEventScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title= {this.props.state.newEventState.title}
          />
        </Appbar.Header>
        <View style={styles.content}>
          <Formik
            initialValues={this.props.state.newEventState.initialValues}
            onSubmit={async (values) => {
              const internalId = this.props.state.newEventState.internalId;
              await this.props.state.newEventState.handleCreate(values, internalId);
              this.props.navigation.navigate("Current Events");
            }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <TextInput
                  onChangeText={handleChange("eventName")}
                  value={values.eventName}
                  label="Event Name"
                  placeholder=""
                />
                <TextInput
                  onChangeText={handleChange("description")}
                  value={values.description}
                  label="Description"
                  placeholder=""
                />
                <Button onPress={handleSubmit} style={styles.button}>Submit</Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}