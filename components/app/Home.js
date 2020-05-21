/**
 * Home.js
 */

/* Import */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


/* Component */
class Home extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={style.imgBackground} source={require("../img/photo-of-harbour-during-golden-hour-3109420.jpg")}>
                    <View style={style.container}>
                        <TouchableOpacity style={style.cityCard} onPress={() => this.props.navigation.navigate("Aujourd'hui", { city: "Antibes", country: "FR", lat: 43.56, lon: 7.13 })}>
                            <Text style={style.cityText}>Antibes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.cityCard} onPress={() => this.props.navigation.navigate("Aujourd'hui", { city: "Cannes", country: "FR", lat: 43.55, lon: 7.02 })}>
                            <Text style={style.cityText}>Cannes (FR)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.cityCard} onPress={() => this.props.navigation.navigate("Aujourd'hui", { city: "Lyon", country: "FR", lat: 45.75, lon: 4.85 })}>
                            <Text style={style.cityText}>Lyon (FR)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.cityCard} onPress={() => this.props.navigation.navigate("Aujourd'hui", { city: "London", country: "FR", lat: 51.51, lon: -0.13 })}>
                            <Text style={style.cityText}>Londres (UK)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.cityCard} onPress={() => this.props.navigation.navigate("Aujourd'hui", { city: "Wuhan", country: "CN", lat: 30.58, lon: 114.27 })}>
                            <Text style={style.cityText}>Wuhan (CN)</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

/* Export */
export default Home;

/* Style */
const style = StyleSheet.create({
    imgBackground: { flex: 1, width: "100%", resizeMode: "cover", },
    cityCard: { flex: 1, margin: 10, borderRadius: 10, backgroundColor: "white" },
    cityText: { flex: 1, textAlignVertical: "center", textAlign: "center", fontSize: 20 },
    container: { flex: 1, margin: 15, marginTop: 25 },
})