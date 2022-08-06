import {SafeAreaView, ScrollView, Text} from 'react-native'
import {Products} from "../Components/Products";
import categoryBg from "../assets/images/category-1.png";
import {useEffect, useState} from "react";
import {Header} from "../Components/Header";
import {Navbar} from "../Components/Navbar";
import pdImage from '../assets/images/product.png'
import {useSelector} from "react-redux";
export const ProductsScreen = () => {
    const productReducer = useSelector((state)=>state.productReducer)
    const  [products,setProduct] = useState(productReducer.data)
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

