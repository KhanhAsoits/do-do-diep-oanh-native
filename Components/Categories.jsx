import {ImageBackground, StyleSheet,Text, View} from "react-native";
import categoryEmbed from "../assets/images/categoriesEmbed.png";
import {CategoryItem} from "./CategoryItem";

export const Categories = ({categories,title}) => {
    return (
        <ImageBackground source={categoryEmbed} >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.categoriesBox}>
                {categories.map((val, index) => {
                    return <CategoryItem key={index} image={val.image} title={val.title}/>
                })}
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 24,
        marginVertical: 10,
        color: "#661013",
        fontWeight: "bold"
    },

    categoriesBox: {
        marginHorizontal: 10,
        marginBottom: 30,
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "row",
    },
})