import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
import {useContext, useEffect, useState} from "react";
import banner from '../assets/images/header-banner.png'
import {Categories} from "../Components/Categories";
import {Products} from "../Components/Products";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "../Components/Header";
import {Navbar} from "../Components/Navbar";
import {useMutation,useQuery} from "@tanstack/react-query";
import {fetchAllCategories} from "../API/CategoriesAPI";
import {RestoreCategories} from "../features/categoriesStore";
import Spinner from "react-native-loading-spinner-overlay";

export const HomeScreen = ({route, navigation, authContext}) => {
    const {signOut} = useContext(authContext)
    const dispatch = useDispatch()
    const categoriesReducer = useSelector((state)=>state.categoriesReducer)
    const productReducer = useSelector((state)=>state.productReducer)
    const [products,setProduct] = useState(productReducer.data)
    const handleLogOut = () => {
        signOut()
    }
    const fetchCategories = useMutation(fetchAllCategories,{retry:3,retryDelay:1,onSuccess:(res)=>{dispatch(RestoreCategories({categories:res,type:"RESTORE_CATEGORIES"}))}})
    useEffect(()=>{
        if (!categoriesReducer.data){
            fetchCategories.mutate()
        }
    },[])
    useEffect(()=>{},[fetchCategories.isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <Header></Header>
            <ScrollView style={styles.mainBody}>
                {<Spinner visible={fetchCategories.isLoading}></Spinner>}
                <View style={styles.body}>
                    {/*banner*/}
                    <View style={styles.imgBox}>
                        <Image source={banner} style={styles.banner}/>
                    </View>
                    {
                        categoriesReducer.data &&
                        Array.from(categoriesReducer.data).slice(0,4) &&
                        <Categories categories={categoriesReducer.data} title={'Danh Mục Sản Phẩm'}></Categories>
                    }
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
