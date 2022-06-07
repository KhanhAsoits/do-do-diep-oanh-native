import {ScrollView, Text, View} from 'react-native'
import {useDispatch} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";

export const CartScreen = () => {
    const dispatch = useDispatch()

    useFocusEffect(() => {
        dispatch(ToggleHeader({header: true}))
    })
    return (

        <ScrollView>
            <View><Text>Cart Screen</Text></View>
        </ScrollView>
    )
}