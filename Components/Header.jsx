import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import logo from '../assets/images/logo-full.png'
import {useState} from "react";
import {AntDesign} from '@expo/vector-icons';

export const Header = () => {
    const [query, setQuery] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image source={logo} style={styles.headerLogo}></Image>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder={"Tìm kiếm sản phẩm , danh mục"} onTextChange={newText => setQuery(newText)}
                           style={styles.headerSearch}/>
                <TouchableOpacity>
                    <AntDesign name="search1" size={23} color="black" style={styles.btnSearch}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: "#661013",
        alignItems:"center",
        paddingTop:0,
    },
    imageBox: {
        alignItems: "center"
    },
    headerLogo: {
        marginTop:30,
        marginBottom:5,
        width:200,
        height: 50,
        resizeMode: "center",
    },
    headerSearch: {
        flex:1,
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius:12,
    },
    inputGroup: {
        borderRadius:12,
        marginHorizontal:20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal:10,
    },
    btnSearch: {
        paddingVertical: 6,
    }
})