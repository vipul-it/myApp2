
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Constants from "expo-constants";

export default function HelloWorld2() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>
                Hello Shubham
            </Text>
            <Text style={styles.heading}>
                Hello <Text style={styles.highlightText2}> Saurabh</Text>
            </Text>
            <Text style={[styles.heading, { color: "#03595d"}]}>
                Hello <Text style={styles.highlightText3}>Devendra</Text>
            </Text>
            <Text style={[styles.heading, { backgroundColor: "#500000", color: "#fff", padding: 10}]}>
                Hello Mr.Vipul
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // SafeAreView on Android devices
        paddingTop: Constants.statusBarHeight,
        marginTop: 200,
    },
    heading: {
        color: "#e74c4b",
        marginTop: 30,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    highlightText2: {
        fontStyle: "italic",
        textDecorationLine: "underline",
        color: "#2980b9",
    },
    highlightText3: {
        color: "#fff",
        backgroundColor: "#59595d",

    },
})