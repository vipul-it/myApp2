import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,

    TouchableOpacity,
    TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FacebookBannerImage from "../../assets/login-page/facebook-banner.jpg";

export default function FacebookLogin() {
    return (
        <>
            <StatusBar style="light" />

            <Image source={FacebookBannerImage} style={styles.banner} />

            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                        style={[styles.input, styles.inputUsername]}
                        placeholder="Phone number or email"
                        placrholderTextColor="#cdcecf"
                    />
                    <TextInput
                        style={[styles.input, styles.inputPassword]}
                        secureTextEntry={true}
                        placeholder="Password"
                        placrholderTextColor="#cdcecf"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkText}>Forget password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkText}>Come back</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <View style={styles.divider}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>OR</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
                            <Text style={[styles.buttonText, styles.buttonRegisterText]}>Create a New Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    banner: {
        resizeMode: "contain",
        width: "100%",
        height: null,
        aspectRatio: 750/460,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        padding: 22,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cdcdcf',
        color: '#333',
        fontSize: 16,
        height: 44,
        paddingHorizontal: 15,
    },
    inputUsername: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        
    },
    inputPassword: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    button: {
        backgroundColor: "#1977f3",
        height: 42,
        borderRadius: 6,
        justifyContent: "center",
        marginVertical: 15,
    },
    buttonText: {
        color: "#b4cafb",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    link: {
        paddingVertical: 8,
    },
    linkText: {
        color: "#1c6ede",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    footer: {
        alignItems: "center",
        marginTop: 180,
        paddingBottom: 0,
    },
    divider: {
        flexDirection: "row",
        alignItmes: "center",
        width: "70%",
        marginBottom: 10,
    },
    dividerLine: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#cbccd0",
    },
    dividerText: {
        width: 50,
        textAlign: "center",
    },
    buttonRegister: {
        width: "100%",
        backgroundColor: "#e7f3ff",
    },
    buttonRegisterText: {
        color: "#1077f7",
    }

});
