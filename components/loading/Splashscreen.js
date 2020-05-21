/**
 * Splashscreen.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native';

/* Component */
class Splashscreen extends Component {

    componentDidMount() {
        setTimeout(() => { this.props.navigation.navigate("App") }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1, width: "100%", resizeMode: "cover" }} source={require('../img/IMG_1428.jpg')} >
                    <Text style={{ flex: 1, textAlign: "center", textAlignVertical: "center", fontWeight: "700", fontStyle: "italic", fontSize: 40, color: "black", textTransform: "uppercase" }}>météo</Text>
                    <ActivityIndicator size="large" color="lightgrey" />
                </ImageBackground >
            </View >
        );
    }
}

/* Export */
export default Splashscreen;
