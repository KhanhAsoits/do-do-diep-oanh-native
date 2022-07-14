import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {format} from "../Components/ProductItem";
import {Products} from "../Components/Products";
import categoryBg from "../assets/images/category-1.png";
import product1 from "../assets/images/product.png";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";
import { Ionicons } from '@expo/vector-icons';
import {Touchable} from "react-native-web";
import {Header} from "../Components/Header";
import {Navbar} from "../Components/Navbar";
export const ProductDetail = ({navigation, route}) => {

    const dispatch = useDispatch()
    const layoutReducer = useSelector(state => state.layoutReducer)

    useFocusEffect(
        useCallback(() => {
            dispatch(ToggleHeader({header: false}))
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


    const productOfCategories = [
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1,
            detail: "mMOp5iCJlUEVdmbB0D9WGRycvo4fG9zbO7YWQfnjS83dshXFvhiNECCcSO0RG2Qns3XnosWtWtWg3fuGDOazbVBn4G72NQirAIxo2IPqqeKebDIBGCFhtXgtujxxoZvPy7zSBvyvHzoPlvgXQY4BTNf5YgZ5JYdB6hYrv9qylKOJsnVaJgNylKlTwuzqsAJjLoaCSgCLgFw",
            size: '256cm x 256cm x 256cm',
            material: 'ĐỒNG NGUYÊN CHẤT MẠ VÀNG'
        },
    ]

    const product = route.params.product
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
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
            </ScrollView>
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