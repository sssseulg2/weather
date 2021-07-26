import React from 'react';
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#005AA7", "#FFFDE4"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#26263e", "#001b43"],
        title: "Rain",
        subtitle: "For more info look outside",
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Snow",
        subtitle: "Do you want to build a snowman? Fuck no.",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#F2994A", "#F2C94C"],
        title: "Clear",
        subtitle: "Go get your ass burnt 🔥",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Clouds",
        subtitle: "I know, fucking boring 😑",
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#3B4371", "#F3904F"],
        title: "Haze",
        subtitle: "Just don't go outside",
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#2C3E50", "#FD746C"],
        title: "Mist",
        subtitle: "It's like you have no glasses on",
    },
    Dust: {
        iconName: "weather-windy-variant",
        gradient: ["#181818", "#BA8B02"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻",
    },
}

export default function Weather({temp, condition}) {
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content"/>
        <View style = {styles.halfContainer}>
            <MaterialCommunityIcons 
            name={weatherOptions[condition].iconName || "weather-sunset"}
            size = {96} 
            color="white"
            />
            <Text style = {styles.temp}>{temp}º</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title} >{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle} >{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>

    );
}

Weather.PropTypes = {
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
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginBottom: 10,
        fontSize: 44,
        fontWeight: "300",
        color: 'white',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        color: 'white',
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})