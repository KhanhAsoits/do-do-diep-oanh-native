import {SafeAreaView, ScrollView} from 'react-native'
import {Products} from "../Components/Products";
import categoryBg from "../assets/images/category-1.png";
import product1 from "../assets/images/product.png";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";
import {Header} from "../Components/Header";
import {Navbar} from "../Components/Navbar";

export const ProductsScreen = () => {
    const initProducts = [
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1
        },
        {
            name: "Cây kim tiền mạ vàng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 42888000,
            rate: 5,
            image: product1
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1
        },
        {
            name: "Cây kim tiền mạ vàng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 42888000,
            rate: 5,
            image: product1
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1
        },
        {
            name: "Cây kim tiền mạ vàng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 42888000,
            rate: 5,
            image: product1
        },
        {
            name: "Lư hương đồng tinh xảo chất lượng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 12888000,
            rate: 4,
            image: product1
        },
        {
            name: "Cây kim tiền mạ vàng",
            category: {
                title: "Đồ thờ cúng",
                image: categoryBg
            },
            price: 42888000,
            rate: 5,
            image: product1
        },
    ]
    const [products, setProducts] = useState(initProducts);
    const dispatch = useDispatch()

    useFocusEffect(() => {
        dispatch(ToggleHeader({header: true}))
    })
    return (
        <SafeAreaView style={{flex:1}}>
            <Header></Header>
            <ScrollView>
                <Products products={products}></Products>
            </ScrollView>
            <Navbar></Navbar>
        </SafeAreaView>

    )
}

