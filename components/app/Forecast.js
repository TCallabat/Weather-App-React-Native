/**
 * Forecast.js
 */

/* Import */
import React, { Component } from "react";
import { FlatList, Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
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

    getForecast = async () => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + this.state.lat + "&lon=" + this.state.lon + "&exclude=current,hourly&units=metric&appid=" + this.state.api + "&lang=fr");
        const json = await response.json();
        this.setState({ data: json.daily });
    };

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

    displayForecast = ({ item }) => (
        <View style={[style.forecastDetailCard, { paddingBottom: 5 }]}>
            <View style={{ flexDirection: "row" }}>
                <View style={[style.forecastTitleView, { padding: 5 }]}>
                    <Text style={style.forecastTitleText}>{moment(item.dt * 1000).locale("fr").format("dddd Do MMMM")}</Text>
                    <Text style={style.forecastTitleText}>{item.weather[0].description}</Text>
                </View>
                <View style={[style.forecastTitleView, { justifyContent: 'center', alignItems: "center" }]}>
                    <Image style={style.forecastTitleImage} source={this.getWeatherIcon(item.weather[0].icon)} />
                </View>
            </View>
            <View style={style.forecastTitleView}>
                <View style={style.forecastTitleView2}>
                    <Image style={style.forecastDetailImage} source={require("../img/temp_min.png")} />
                    <Text style={style.forecastDetailText}>{(item.temp.min).toFixed(1)} °C</Text>
                    <Image style={style.forecastDetailImage} source={require("../img/temp_max.png")} />
                    <Text style={style.forecastDetailText}>{(item.temp.max).toFixed(1)} °C</Text>
                </View>
                <View style={style.forecastTitleView2}>
                    <Image style={style.forecastDetailImage} source={require("../img/sunrise.png")} />
                    <Text style={style.forecastDetailText}>{moment((item.sunrise) * 1000).locale("fr").format("HH:mm")}</Text>
                    <Image style={style.forecastDetailImage} source={require("../img/sunset.png")} />
                    <Text style={style.forecastDetailText}>{moment((item.sunset) * 1000).locale("fr").format("HH:mm")}</Text>
                </View>
                <View style={style.forecastTitleView2}>
                    <Image style={style.forecastDetailImage} source={require("../img/wind_speed.png")} />
                    <Text style={style.forecastDetailText}>{(item.wind_speed * 3.6).toFixed(0)} km/h</Text>
                    <Image style={style.forecastDetailImage} source={require("../img/uv.png")} />
                    <Text style={style.forecastDetailText}>{item.uvi.toFixed(0)}/16</Text>
                </View>
                <View style={style.forecastTitleView2}>
                    <Image style={style.forecastDetailImage} source={require("../img/pressure.png")} />
                    <Text style={style.forecastDetailText}>{item.pressure} hPa</Text>
                    <Image style={style.forecastDetailImage} source={require("../img/humidity.png")} />
                    <Text style={style.forecastDetailText}>{item.humidity} %</Text>
                </View>
            </View>
        </View>
    )

    render() {
        const { navigation } = this.props;
        this.state.city = this.props.navigation.state.params.city
        this.state.country = this.props.navigation.state.params.country
        this.state.lat = this.props.navigation.state.params.lat
        this.state.lon = this.props.navigation.state.params.lon
        this.getForecast()
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={style.imgBackground} source={require("../img/photo-of-harbour-during-golden-hour-3109420.jpg")}>
                    <View style={style.cityCard}>
                        <Text style={style.forecastCityName}>{this.state.city} ({this.state.country})</Text>
                        <Text style={style.forecastCityCoords}>{this.state.lon}°N {this.state.lat}°E</Text>
                    </View>
                    <View style={style.container}>
                        <View style={{ flex: 1 }}>
                            <FlatList data={this.state.data} keyExtractor={(x, i) => i} renderItem={this.displayForecast} />
                        </View>
                    </View >
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
            </View>
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
    forecastCityName: { flex: 5, textAlign: "center", textAlignVertical: "bottom", textTransform: "uppercase", fontWeight: "700", fontSize: 40 },
    forecastCityCoords: { flex: 3, textAlign: "center", textAlignVertical: "top" },
    forecastDetailCard: { flex: 1, marginHorizontal: 5, borderRadius: 10, backgroundColor: "white", paddingHorizontal: 10, marginVertical: 10 },
    forecastTitleView: { flex: 1 },
    forecastTitleText: { flex: 1, textAlign: "center" },
    forecastTitleImage: { width: 75, height: 75, resizeMode: "contain" },
    forecastTitleView2: { flex: 1, flexDirection: "row", margin: 2 },
    forecastDetailImage: { flex: 1, height: 30, alignSelf: "center", resizeMode: "contain" },
    forecastDetailText: { flex: 1, textAlign: "left" },
})