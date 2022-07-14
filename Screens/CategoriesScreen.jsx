import {Image, SafeAreaView, ScrollView, View} from 'react-native'
import categoryBg from "../assets/images/category-1.png";
import categoryBg2 from "../assets/images/category-2.png";
import categoryBg3 from "../assets/images/category-3.png";
import categoryBg4 from "../assets/images/category-4.png";
import {Categories} from "../Components/Categories";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import {ToggleHeader} from "../features/layoutStore";
import {Header} from "../Components/Header";
import banner from "../assets/images/header-banner.png";
import {Products} from "../Components/Products";
import {Navbar} from "../Components/Navbar";

export const CategoriesScreen = () => {
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
    const [categories, setCategories] = useState(initCategories)
    const dispatch = useDispatch()


    return (
        <SafeAreaView style={{flex:1}}>
            <Header></Header>
            <ScrollView>
                <Categories categories={categories}></Categories>
            </ScrollView>
            <Navbar></Navbar>
        </SafeAreaView>
    )
}