import {Image, SafeAreaView, ScrollView, StyleSheet,Animated,Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useRef, useState} from "react";
import {format} from "../Components/ProductItem";
import {Products} from "../Components/Products";
import {useFocusEffect} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import {Navbar} from "../Components/Navbar";
import Spinner from "react-native-loading-spinner-overlay/src";
import {wait} from "../helpers/delayClient";
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
export const ProductDetail = ({navigation, route}) => {
    const layoutReducer = useSelector(state => state.layoutReducer)
    const [isLoading,setIsLoading] = useState(false)
    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('cart')
                    }}>
                        <Ionicons name="cart" size={32} color="rgba(0, 0, 0, 0.36)"/>
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Ionicons name="arrow-back-circle" size={32}
                                  color="rgba(0, 0, 0, 0.36)"/>
                    </TouchableOpacity>
                )
            })
        }, [layoutReducer.header])
    )

    const productReducer = useSelector((state)=>state.productReducer)
    const productOfCategories = productReducer.data
    const product = route.params.product
    useEffect(()=>{
        const bootstrapAsync = async ()=>{
            setIsLoading(true)
            await wait(1000)
            ref_.current.scrollTo({x:0,y:0,animated:true})
            setIsLoading(false)
        }
        if (ref_.current){
            bootstrapAsync()
        }
    },[product])
    useEffect(()=>{},[isLoading])
    const ref_ = useRef(null)
    return (
        <SafeAreaView style={styles.container}>
            <AnimatedScrollView  style={styles.container} ref={ref_}>
                {isLoading && <Spinner visible={true}></Spinner>}
                <Image source={product.image} style={styles.productImage}/>
                <View style={styles.detailContainer}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>{format(product.price)} VND</Text>
                    <View style={styles.describleContainer}>
                        <Text style={[styles.font20, styles.textUpperCase]}>Chi TIẾT SẢN PHẨM</Text>
                        <Text style={[styles.font12, styles.textUpperCase, styles.fwBold, {marginVertical: 14}]}>danh mục :
                            <Text style={[styles.textInfo, styles.fwBold, styles.font12]}> {product.category.title}</Text>
                        </Text>
                        <Text style={[styles.font12, styles.fwBold, styles.textUpperCase]}>mô tả :
                        </Text>
                        <Text style={[styles.font12, styles.fwBold, styles.textUpperCase]}>
                            {product.detail}
                        </Text>
                        <Text style={[styles.font12, styles.textUpperCase, styles.fwBold, {marginVertical: 8}]}>kích thước:
                            <Text style={[styles.font12, styles.fwNormal]}> {product.size}</Text>
                        </Text>
                        <Text style={[styles.font12, styles.textUpperCase, styles.fwBold, {marginVertical: 8}]}>chất liệu:
                            <Text style={[styles.font12, styles.fwNormal]}> {product.material}</Text>
                        </Text>
                    </View>
                </View>
                <Products title={"Sản Phẩm Cùng Loại"} products={productOfCategories}></Products>
            </AnimatedScrollView>
            <Navbar></Navbar>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    font12: {
        fontSize: 12,
    },
    textInfo: {
        color: "blue",
    },
    fwNormal: {
        fontWeight: "normal"
    },
    fwBold: {
        fontWeight: "bold"
    },
    font20: {
        fontSize: 20,
    },
    textUpperCase: {
        textTransform: "uppercase"
    },
    detailContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#661013"
    },
    productName: {
        marginBottom: 0,
        marginTop: 18,
        fontSize: 16,
        color: "white",
        textTransform: "uppercase",
    },
    productImage: {
        display: "flex",
        flex: 1,
        resizeMode: "contain",
        alignSelf: "center"
    },
    productPrice: {
        marginTop: 16,
        marginBottom: 25,
        color: "#D8AB37",
        fontSize: 32,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    describleContainer: {
        flex: 1,
        paddingHorizontal: 13,
        paddingVertical: 15,
        backgroundColor: "white",
        borderRadius: 6,
    }

})
