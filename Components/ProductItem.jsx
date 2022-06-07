import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import "intl"
import "intl/locale-data/jsonp/vi-VN"
import {Ionicons} from '@expo/vector-icons'
import {Link} from "@react-navigation/native";

export const format = (money) => {
    return new Intl.NumberFormat('vi-VN').format(money)
}
const StarIcon = () => {
    return (
        <TouchableOpacity style={styles.starIcon}>
            <Ionicons name={'star'} size={14} color={"#EDC831"}/>
        </TouchableOpacity>
    )
}
const GenRate = ({rate}) => {
    const starArr = [1, 2, 3, 4, 5]
    starArr.length = rate;
    return (
        <View style={styles.starContainer}>
            {starArr.map((val, index) => {
                return <StarIcon key={index}/>
            })}
        </View>
    )
}

const screenWith = Dimensions.get('window').width
export const ProductItem = ({product}) => {
    return (
        <Link to={{screen: 'product_detail', params: {product: product}}} style={{margin:6}}>
            <View style={styles.productBox}>
                <Image source={product.image} style={styles.productImage}/>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.categoryName}>{product.category.title}</Text>
                <Text style={styles.productPrice}>{format(product.price)} VND</Text>
                <GenRate rate={product.rate}></GenRate>
            </View>

        </Link>

    )
}
const styles = StyleSheet.create({
    starContainer: {
        flexDirection: "row"
    },
    starIcon: {
        margin: 2
    },
    productBox: {
        width: screenWith / 2.3,
        borderRadius: 10,
        padding:10,
        backgroundColor: "white",
    },
    productImage: {
        display:"flex",
        alignSelf:"center",
        height: 180,
        resizeMode: "contain"
    },
    productName: {
        fontSize: 15,
        fontWeight: "bold",
    },
    categoryName: {
        fontSize: 12,
    },
    productPrice: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#661013"
    }
})