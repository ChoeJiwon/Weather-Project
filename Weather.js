import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "view-headline",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개가 짙어요",
        subtitle: "자동차나 자전거를 타실 때 유의하세요.",
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#434343", "#000000"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#021B79", "#0575E6"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#093637", "#44A08D"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: [,]
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#0f3443", "#34e89e"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#0ED2F7", "#B2FEFA"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"]
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"]
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"]
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"]
    },
    Squall: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"]
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#000428", "#004e92"]
    }
}


export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>
                    {temp}°
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }

});