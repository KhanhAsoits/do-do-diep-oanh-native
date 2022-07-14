import {SafeAreaView, ScrollView, Text, View} from 'react-native'
import {useDispatch} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";
import {Header} from "../Components/Header";
import {Categories} from "../Components/Categories";
import {Navbar} from "../Components/Navbar";

export const CartScreen = () => {
    const dispatch = useDispatch()

    useFocusEffect(() => {
        dispatch(ToggleHeader({header: true}))
    })
    return (
        <SafeAreaView style={{flex:1}}>
            <Header></Header>
            <ScrollView>
                <View><Text>Cart Screen</Text></View>
            </ScrollView>
            <Navbar></Navbar>
        </SafeAreaView>
    )
}