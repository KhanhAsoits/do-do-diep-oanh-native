import {SafeAreaView, StyleSheet} from "react-native";
import {Header} from "../Components/Header";
import {Navbar} from "../Components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {ToggleHeader} from "../features/layoutStore";

export const LayoutScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header></Header>
            <Navbar></Navbar>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})