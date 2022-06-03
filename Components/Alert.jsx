import {Button, Modal} from "react-native";
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import {useState} from "react";

export const Alert = ({message}) => {

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
            >
                <Text style={styles.text}>{message}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        paddingVertical: 10,
        borderRadius: 6,
    },
    text: {
        fontSize: 12,
        paddingHorizontal: 3,
        textAlign: "center",
        color: "white",
    },

})