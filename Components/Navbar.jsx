import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {Link} from "@react-navigation/native";
import {useState} from "react";
import {Ionicons} from '@expo/vector-icons'
import logoMenu from '../assets/images/logo-menu.png'

const screenWith = Dimensions.get('window').width;
export const NavbarItem = ({item, index = false}) => {

    return (
        index ?
            <Link to={{screen: item.to}}>
                <View style={styles.navItem}>
                    <Image source={logoMenu} style={styles.homeLogo}></Image>
                </View>
            </Link>
            :
            <Link to={{screen: item.to}}>
                <View style={styles.navItem}>
                    <Ionicons name={item.icon.name} size={item.icon.size} color={item.icon.color}/>
                    <Text style={{...styles.categoryTitle, color: item.icon.color}}>{item.title}</Text>
                </View>
            </Link>
    )
}
export const Navbar = () => {
    const initNavItems = [
        {title: "Danh Mục", to: 'categories', icon: {name: 'copy', size: 24, color: "#C0C0C0"}},
        {title: "Sản Phẩm", to: 'products', icon: {name: 'cube', size: 24, color: "#C0C0C0"}},
        {title: "Trang chủ", index: true, to: 'home', icon: {name: 'copy', size: 24, color: "#C0C0C0"}},
        {title: "Giỏ Hàng", to: 'cart', icon: {name: 'cart', size: 24, color: "#C0C0C0"}},
        {title: "Tôi", to: 'profile', icon: {name: 'person', size: 24, color: "#C0C0C0"}},
    ]
    const [items, setItems] = useState(initNavItems)
    return (
        <View style={styles.container}>
            {items.map((val, index) => {
                return (val.hasOwnProperty('index') ? <NavbarItem index={true} key={index} item={val}></NavbarItem> :
                    <NavbarItem key={index} item={val}></NavbarItem>)
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        shadowColor: "gray",
        paddingTop: 10,
        position:"relative"
    },
    item: {},
    homeLogo: {
        width: 64,
        height:64,
        position: "absolute",
        top:-40,
    },
    navItem: {
        textAlign: "center",
        width: screenWith / 5,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryTitle: {
        textAlign: "center",
        marginVertical: 8,
    }
})