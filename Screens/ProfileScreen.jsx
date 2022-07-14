import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";
import user from '../assets/images/user.png'
import bg from '../assets/images/categoriesEmbed.png'
import {Ionicons} from "@expo/vector-icons";
import {Header} from "../Components/Header";
import {Products} from "../Components/Products";
import {Navbar} from "../Components/Navbar";
import {useContext} from "react";

export const ProfileScreen = ({route, navigation,AuthContext}) => {
    const dispatch = useDispatch()
    const {signOut} = useContext(AuthContext)
    const userReducer = useSelector((state) => state.userReducer)
    useFocusEffect(() => {
        dispatch(ToggleHeader({header: true}))
    })
    return (
        <SafeAreaView style={{flex:1}}>
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
                <TouchableOpacity onPress={signOut} style={styles.logoutBtn}><Text style={{color:"white"}}>Logout</Text></TouchableOpacity>
            </ImageBackground>
            <Navbar></Navbar>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logoutBtn:{
        marginVertical:20,
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:6,
        backgroundColor:"rgba(102, 16, 19, 1)"
    },
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