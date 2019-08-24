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
        gradient: ["#434343", "#000000"],
        title: "천둥번개",
        subtitle: "집 밖으로 나가면 뒤질 수도 있어요. 나가지 마세요."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#021B79", "#0575E6"],
        title: "비 쪼끔",
        subtitle: "비가 조금 오지만 탈모 방지를 위해서 우산은 필수"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#093637", "#44A08D"],
        title: "비",
        subtitle: "자라나라 머리머리! 를 위해서라면 우산은 필수"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#005C97","#363795"],
        title: "눈이와요",
        subtitle: "눈사람 만들기보다는 진짜 사람 만들기가 더 좋죠"
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#0f3443", "#34e89e"],
        title: "안개",
        subtitle: "안개가 꼈네여"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#0ED2F7", "#B2FEFA"],
        title: "맑음",
        subtitle: "날씨가 좋쿤요. 얼른 데이트하러 나가세요. (앗, 혹시 솔로...?)"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "구름낌",
        subtitle: "구름이 꽤 껴있네요. 당신 팔짱에는 아무도 안껴있네요."
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"],
        title: "옅은 안개",
        subtitle: "오늘은 스킨 안하고 나가도 미스트가 있으니 괜춘쓰~"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"],
        title: "안개 자욱",
        subtitle: "자욱아~~자욱아~~ 안개는 자옥이보단 자욱이죠"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"],
        title: "황사",
        subtitle: "X발, X같은 황사; 마스크 끼세여"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"],
        title: "안개",
        subtitle: "Fog 안에 알이 있으면 Frog"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"],
        title: "모래바람",
        subtitle: "아니 세상에 날씨가 모래바람인 곳도 있네요;"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"],
        title: "Ash",
        subtitle: "자! 밥! 어서 공격해!"
    },
    Squall: {
        iconName: "weather-fog",
        gradient: ["#2F0743", "#41295a"],
        title: "몰라여",
        subtitle: "스쿼트도 아니고 스퀄은 뭐죠"
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#000428", "#004e92"],
        title: "토네이도",
        subtitle: "절대 집밖으로 나가지 말고 창문도 단디 잠그고 조심하소;;"
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