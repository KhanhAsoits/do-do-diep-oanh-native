import {SafeAreaView, ScrollView, Text, View} from 'react-native'
import {useDispatch} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";
import {Header} from "../Components/Header";
import {Categories} from "../Components/Categories";
import {Navbar} from "../Components/Navbar";
import Spinner from "react-native-loading-spinner-overlay/src";

export const CartScreen = () => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={{flex:1}}>

            <Header></Header>
            <ScrollView>
                <View><Text style={{fontSize:20,textAlign:"center"}}>Không có gì trong giỏ cả !</Text></View>
            </ScrollView>
            <Navbar></Navbar>
        </SafeAreaView>
    )
}
