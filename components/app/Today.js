/**
 * Weather.js
 */

/* Import */
import React, { Component } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import "moment/locale/fr";

import wind_n from "../img/wind_n.png";
import wind_nne from "../img/wind_nne.png";
import wind_ne from "../img/wind_ne.png";
import wind_ene from "../img/wind_ene.png";
import wind_e from "../img/wind_e.png";
import wind_ese from "../img/wind_ese.png";
import wind_se from "../img/wind_se.png";
import wind_sse from "../img/wind_sse.png";
import wind_s from "../img/wind_s.png";
import wind_ssw from "../img/wind_ssw.png";
import wind_sw from "../img/wind_sw.png";
import wind_wsw from "../img/wind_wsw.png";
import wind_w from "../img/wind_w.png";
import wind_wnw from "../img/wind_wnw.png";
import wind_nw from "../img/wind_nw.png";
import wind_nnw from "../img/wind_nnw.png";

import img01 from "../img/01.png";
import img02 from "../img/02.png";
import img03 from "../img/03.png";
import img04 from "../img/04.png";
import img09 from "../img/09.png";
import img10 from "../img/10.png";
import img11 from "../img/11.png";
import img13 from "../img/13.png";
import img50 from "../img/50.png";

/* Component */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: "47a69064bb4fadd9de65bbbfa2e6161a",
            city: "",
            country: "",
            lat: 0,
            lon: 0,
            data: []
        };
    };

    getCurrentWeather = () => {
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon=" + this.state.lon + "&units=metric&appid=" + this.state.api + "&lang=fr")
            .then(response => response.json())
            .then(
                data => {
                    this.setState({
                        dt: data.dt,
                        timezone: data.timezone,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                        temp: data.main.temp,
                        temp_min: data.main.temp_min,
                        temp_max: data.main.temp_max,
                        temp_feels_like: data.main.feels_like,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                        wind_speed: data.wind.speed,
                        wind_degree: data.wind.deg,
                    })
                },
                error => console.log(error)
            )
    }

    getWindDirection = (deg) => {
        if (deg >= 348.75 && deg < 11.25) { return wind_n };
        if (deg >= 11.25 && deg < 33.75) { return wind_nne };
        if (deg >= 33.75 && deg < 56.25) { return wind_ne };
        if (deg >= 56.25 && deg < 78.75) { return wind_ene };
        if (deg >= 78.75 && deg < 101.25) { return wind_e };
        if (deg >= 101.25 && deg < 123.75) { return wind_ese };
        if (deg >= 123.75 && deg < 146.25) { return wind_se };
        if (deg >= 146.25 && deg < 168.75) { return wind_sse };
        if (deg >= 168.75 && deg < 191.25) { return wind_s };
        if (deg >= 191.25 && deg < 213.75) { return wind_ssw };
        if (deg >= 213.75 && deg < 236.25) { return wind_sw };
        if (deg >= 236.25 && deg < 258.75) { return wind_wsw };
        if (deg >= 258.75 && deg < 281.25) { return wind_w };
        if (deg >= 281.25 && deg < 303.75) { return wind_wnw };
        if (deg >= 303.75 && deg < 326.25) { return wind_nw };
        if (deg >= 326.25 && deg < 348.75) { return wind_nnw };
    }

    getWeatherIcon = (weather) => {
        if (weather == "01d" || weather == "01n") { return img01 };
        if (weather == "02d" || weather == "02n") { return img02 };
        if (weather == "03d" || weather == "03n") { return img03 };
        if (weather == "04d" || weather == "04n") { return img04 };
        if (weather == "09d" || weather == "09n") { return img09 };
        if (weather == "10d" || weather == "10n") { return img10 };
        if (weather == "11d" || weather == "11n") { return img11 };
        if (weather == "13d" || weather == "13n") { return img13 };
        if (weather == "50d" || weather == "50n") { return img50 };
    }

    render() {
        const { navigation } = this.props;
        this.state.city = this.props.navigation.state.params.city
        this.state.country = this.props.navigation.state.params.country
        this.state.lat = this.props.navigation.state.params.lat
        this.state.lon = this.props.navigation.state.params.lon
        this.getCurrentWeather()
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={style.imgBackground} source={require("../img/photo-of-harbour-during-golden-hour-3109420.jpg")}>
                    <View style={style.cityCard}>
                        <Text style={style.dayCityName}>{this.state.city} ({this.state.country})</Text>
                        <Text style={style.dayCityCoords}>{this.state.lon}°N {this.state.lat}°E</Text>
                    </View>
                    <View style={style.container}>
                        <View style={style.dayTitleCard}>
                            <View style={style.dayTitleView}>
                                <View style={[style.dayTitleView2, { flex: 2 }]}>
                                    <Text style={[style.dayTitleText, { textAlignVertical: "bottom" }]}>{moment(this.state.dt * 1000).locale("fr").format("dddd")}</Text>
                                    <Text style={[style.dayTitleText, { textAlignVertical: "top" }]}>{moment(this.state.dt * 1000).locale("fr").format("Do MMMM YYYY")}</Text>
                                </View>
                                <View style={[style.dayTitleView2, { flex: 1.5 }]}>
                                    <Text style={[style.dayTitleText, { textAlignVertical: "center", fontSize: 14, textTransform: "uppercase" }]}>{this.state.description}</Text>
                                </View>
                                <View style={[style.dayTitleView2, { flex: 1.5 }]}>
                                    <Text style={[style.dayTitleText, { textAlignVertical: "center", fontSize: 15 }]}>{parseFloat(this.state.temp).toFixed(2)} °C</Text>
                                </View>
                            </View>
                            <View style={style.dayTitleImageView}>
                                <Image style={style.dayTitleImage} source={this.getWeatherIcon(this.state.icon)} />
                            </View>
                        </View>
                        <View style={style.dayDetailCard}>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/temp_min.png")} />
                                <Text style={style.dayDetailText}>{parseFloat(this.state.temp_min).toFixed(1)} °C</Text>
                            </View>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/temp_max.png")} />
                                <Text style={style.dayDetailText}>{parseFloat(this.state.temp_max).toFixed(1)} °C</Text>
                            </View>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/wind_speed.png")} />
                                <Text style={style.dayDetailText}>{parseFloat(this.state.wind_speed * 3.6).toFixed(0)} km/h</Text>
                            </View>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/wind_direction.png")} />
                                <Image style={style.dayDetailImage} source={this.getWindDirection(this.state.wind_degree)} />
                            </View>
                        </View>
                        <View style={style.dayDetailCard}>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/sunrise.png")} />
                                <Text style={style.dayDetailText}>{moment(this.state.sunrise * 1000).locale("fr").format("HH:mm")}</Text>
                            </View>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/sunset.png")} />
                                <Text style={style.dayDetailText}>{moment(this.state.sunset * 1000).locale("fr").format("HH:mm")}</Text>
                            </View>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/pressure.png")} />
                                <Text style={style.dayDetailText}>{this.state.pressure} hPa</Text>
                            </View>
                            <View style={style.dayDetailView}>
                                <Image style={style.dayDetailImage} source={require("../img/humidity.png")} />
                                <Text style={style.dayDetailText}>{this.state.humidity} %</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={style.menuCard}>
                    <TouchableOpacity style={style.menuButton} onPress={() => this.props.navigation.navigate("Accueil")}>
                        <Image style={style.menuImage} source={require("../img/home.png")} />
                        <Text style={style.menuText}>Accueil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuButton} onPress={() => this.props.navigation.navigate("Aujourd'hui", { city: this.state.city, country: this.state.country, lat: this.state.lat, lon: this.state.lon })}>
                        <Image style={style.menuImage} source={require("../img/today.png")} />
                        <Text style={style.menuText}>Aujourd'hui</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.menuButton} onPress={() => this.props.navigation.navigate("Prévision", { city: this.state.city, country: this.state.country, lat: this.state.lat, lon: this.state.lon })}>
                        <Image style={style.menuImage} source={require("../img/forecast.png")} />
                        <Text style={style.menuText}>Prévision</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

/* Export */
export default App;

/* Style */
const style = StyleSheet.create({
    menuCard: { height: 52, flexDirection: "row", backgroundColor: "white", paddingTop: 5 },
    menuButton: { flex: 1, flexDirection: "column" },
    menuImage: { flex: 1, height: 20, alignSelf: "center", resizeMode: "contain" },
    menuText: { textAlign: "center", fontSize: 12, paddingBottom: 2 },
    imgBackground: { flex: 1, width: "100%", resizeMode: "cover" },
    cityCard: { height: 150, marginTop: 10 },
    container: { flex: 1, marginHorizontal: 5, marginBottom: 15 },
    dayCityName: { flex: 5, textAlign: "center", textAlignVertical: "bottom", textTransform: "uppercase", fontWeight: "700", fontSize: 40 },
    dayCityCoords: { flex: 3, textAlign: "center", textAlignVertical: "top" },
    dayTitleCard: { flex: 2, flexDirection: "row", marginVertical: 5 },
    dayTitleView: { flex: 1, marginHorizontal: 5 },
    dayTitleView2: { borderRadius: 10, backgroundColor: "white", marginVertical: 5 },
    dayTitleText: { flex: 1, textAlign: "center" },
    dayTitleImageView: { flex: 1, margin: 5, borderRadius: 10, backgroundColor: "white", justifyContent: "center", alignItems: "center" },
    dayTitleImage: { width: 150, height: 150, resizeMode: "contain" },
    dayDetailCard: { flex: 1, flexDirection: "row", marginVertical: 5 },
    dayDetailView: { flex: 1, marginHorizontal: 5, borderRadius: 10, backgroundColor: "white", padding: 5 },
    dayDetailImage: { flex: 1, width: 35, alignSelf: "center", resizeMode: "contain" },
    dayDetailText: { flex: 1, height: 35, textAlign: "center", textAlignVertical: "center", fontSize: 14 },
})