"use strict";

import {styles} from "../sign_in/SignInStyle";
import React from "react";
import {Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {Appbar, TextInput, Button, HelperText} from "react-native-paper";
import {Formik} from "formik";

/**
 * Sign-In Screen
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
@inject("state")
@observer
export class SignInScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Appbar.Header>*/}
          {/*<Appbar.Content*/}
            {/*title={"Sign In"}*/}
          {/*/>*/}
        {/*</Appbar.Header>*/}
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Formik
            initValues={this.props.state.signInState.initValues}
            onSubmit={async (values) => {
              let user = await this.props.state.signInState.handleSubmit(values);

              // Keyboard.dismiss();
              this.props.state.userInterfaceState.internalId = user;
              console.log(" this is the internal id:" + this.props.state.userInterfaceState.internalId);
              if (user !== -1) {
                this.props.navigation.navigate("Profile");
              }
            }
            }>
            {({handleChange, handleSubmit, values}) => (
              <View style={styles.content}>
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  label="Email"
                  placeholder=""
                />
                <TextInput style={styles.textInput}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  label="Password"
                  placeholder=""
                  secureTextEntry={true}
                />
                <Text style={{color: "red"}}>{this.props.state.signInState.error}</Text>
                <Button onPress={handleSubmit} style={styles.button} mode="contained">Sign In</Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}