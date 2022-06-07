import {Image, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";
import user from '../assets/images/user.png'
import bg from '../assets/images/categoriesEmbed.png'
import {Ionicons} from "@expo/vector-icons";

export const ProfileScreen = ({route, navigation}) => {
    const dispatch = useDispatch()
    const userReducer = useSelector((state) => state.userReducer)
    useFocusEffect(() => {
        dispatch(ToggleHeader({header: true}))
    })
    return (
        <ImageBackground source={bg} style={styles.container}>
            <Image source={user} style={styles.avatar}/>
            <Text style={styles.userName}>{userReducer.user.userName}</Text>
            <View style={styles.profileInputContainer}>
                <TextInput editable={false} value={userReducer.user.email} style={styles.profileInput}/>
                <Ionicons name={'create'} size={25} color={'rgba(102, 16, 19, 1)'}/>
            </View>
            <View style={styles.profileInputContainer}>
                <TextInput editable={false} value={userReducer.user.numberPhone} style={styles.profileInput}/>
                <Ionicons name={'create'} size={25} color={'rgba(102, 16, 19, 1)'}/>
            </View>
            <View style={styles.profileInputContainer}>
                <TextInput editable={false} value={userReducer.user.address} style={styles.profileInput}/>
                <Ionicons name={'create'} size={25} color={'rgba(102, 16, 19, 1)'}/>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 7,
        paddingVertical: 50,
        flex: 1,
        alignItems: "center"
    }, userName: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 24,
        textTransform: 'uppercase'
    },
    profileInputContainer: {
        marginTop:23,
        padding: 6,
        marginHorizontal: 12,
        backgroundColor: "#D9D9D9",
        flexDirection: "row",
        alignItems: "center",
    },
    profileInput: {
        width: "100%",
        backgroundColor: "#D9D9D9",
    },
    avatar: {
        width: 171,
        height: 171,
        resizeMode: "contain"
    },

})