import {StyleSheet, Text, View} from "react-native";
import {ProductItem} from "./ProductItem";

export const Products = ({products, title}) => {
    return (
        <View style={styles.popularProduct}>
            <Text style={[styles.title, {color: "white"}]}>{title}</Text>
            <View style={styles.productsContainer}>
                {products.map((val, index) => {
                    return <ProductItem key={index} product={val}></ProductItem>
                })}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    productsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center"
    },
    popularProduct: {
        backgroundColor: "#661013",
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        marginVertical: 10,
        color: "#661013",
        fontWeight: "bold"
    },
})