import {Image, ImageBackground, SafeAreaView, ScrollView, View} from 'react-native'
import {Categories} from "../Components/Categories";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "../Components/Header";
import {Navbar} from "../Components/Navbar";
import {useMutation, useQuery} from '@tanstack/react-query'
import {fetchAllCategories} from "../API/CategoriesAPI";
import Spinner from "react-native-loading-spinner-overlay/src";
import {RestoreCategories} from "../features/categoriesStore";
import categoryEmbed from "../assets/images/categoriesEmbed.png";
export const CategoriesScreen = () => {
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(false)
    const categoriesReducer = useSelector((state)=>state.categoriesReducer)
    const query = useMutation(fetchAllCategories,{retry:3,retryDelay:1,onSuccess:(res)=>{dispatch(RestoreCategories({categories:res,type:"RESTORE_CATEGORIES"}))}})
    useEffect(()=>{

    },[query.isLoading])

    useEffect(()=>{
        const asyncBootstrap = async ()=>{
            query.mutate()
        }
        if (!categoriesReducer.data){
            asyncBootstrap()
        }
    },[categoriesReducer.data])
    return (
        <SafeAreaView style={{flex:1}}>
            <Header></Header>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <Spinner visible={query.isLoading}></Spinner>
                <ImageBackground style={{flex:1}} source={categoryEmbed} >
                    <Spinner visible={isLoading}></Spinner>
                    {categoriesReducer.data && <Categories categories={categoriesReducer.data} title={'Tất Cả Danh Mục'}></Categories>}
                </ImageBackground>
            </ScrollView>
            <Navbar></Navbar>
        </SafeAreaView>
    )
}
