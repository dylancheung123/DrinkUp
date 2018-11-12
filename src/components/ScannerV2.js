import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

import { RNCamera } from "react-native-camera";

export default class ScannerV2 extends Component {

  constructor() {
    super();
    this.state = {
      scanning: true,
      cameraType: RNCamera.Constants.Type.back,
      data: "no data"
    };
  }

  _handleBarCodeRead(e) {
    console.log(e.type);
    this.setState({scanning: false, data: e.type});
  }

  getInitialState() {
    return {
      scanning: true,
      cameraType: RNCamera.Constants.Type.back
    };
  }

  render() {
    if(this.state.scanning) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Barcode Scanner
          </Text>
          <View style={styles.rectangleContainer}>
            <RNCamera
              style={styles.camera}
              type={this.state.cameraType}
              barCodeTypes = {[RNCamera.Constants.BarCodeType.pdf417]}
              onBarCodeRead={this._handleBarCodeRead.bind(this)}>
              <View style={styles.rectangleContainer}>
                <View style={styles.rectangle}/>
              </View>
            </RNCamera>
          </View>
          <Text style={styles.instructions}>
            Data: {this.state.data}
          </Text>
        </View>
      );
    }
    else{
      return (<View  style={styles.container}>
        <Text style={styles.welcome}>
          Barcode Scanner
        </Text>
        <Text style={styles.instructions}>
          Data: {this.state.data}
        </Text>
      </View>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  camera: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  rectangle: {
    height: 400,
    width: 100,
    borderWidth: 2,
    borderColor: "#00FF00",
    backgroundColor: "transparent",
  },
});