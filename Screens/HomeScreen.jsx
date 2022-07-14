import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
import {useContext, useState} from "react";
import banner from '../assets/images/header-banner.png'
import categoryBg from '../assets/images/category-1.png'
import categoryBg2 from "../assets/images/category-2.png"
import categoryBg3 from "../assets/images/category-3.png"
import categoryBg4 from "../assets/images/category-4.png"
import product1 from '../assets/images/product.png'
import {Categories} from "../Components/Categories";
import {Products} from "../Components/Products";
import {useDispatch, useSelector} from "react-redux";
import {ToggleHeader} from "../features/layoutStore";
import {useFocusEffect} from "@react-navigation/native";
import {Header} from "../Components/Header";
import {Navbar} from "../Components/Navbar";

export const HomeScreen = ({route, navigation, authContext}) => {

    const initCategories = [
        {
            title: "Đồ thờ cúng",
            image: categoryBg
        },
        {
            title: "Đồ Mạ Vàng",
            image: categoryBg2
        },
        {
            title: "Đồ Đồng Văn",
            image: categoryBg3
        },
        {
            title: "Đồ đá sứ",
            image: categoryBg4
        },
    ]
    const initProducts = [
        {
            name: "Lư hương đồng tinh xảo chất lượng 1",
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
            name: "Lư hương đồng tinh xảo chất lượng 2",
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
    const [categories, setCategories] = useState(initCategories);
    const [products, setProducts] = useState(initProducts);
    const {signOut} = useContext(authContext)
    const layoutReducer = useSelector((state) => state.layoutReducer)
    const dispatch = useDispatch()

    useFocusEffect(() => {
        dispatch(ToggleHeader({header: true}))
    })

    const handleLogOut = () => {
        signOut()
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header></Header>
            <ScrollView style={styles.mainBody}>
                <View style={styles.body}>
                    {/*banner*/}
                    <View style={styles.imgBox}>
                        <Image source={banner} style={styles.banner}/>
                    </View>
                    <Categories categories={categories} title={'Danh Mục Sản Phẩm'}></Categories>
                    <Products products={products} title={"Sản Phẩm Nổi Bật"}></Products>
                </View>
            </ScrollView>
            <Navbar></Navbar>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainBody: {
        elevation: 1,
    },
    banner: {
        height: 135,
        resizeMode: "contain",
    },
    imgBox: {
        alignItems: "center",
    },


})