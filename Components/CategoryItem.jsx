import {View,Text,StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native'
const screenWidth = Dimensions.get('window').width
export const CategoryItem = ({image,title}) => {
    return(
        <TouchableOpacity style={styles.categoryItem}>
            <Image source={image} style={styles.categoryImage}/>
            <Text style={styles.categoryName}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    categoryItem:{
        width:screenWidth/5,
        justifyContent:"center",
        alignItems:"center",
        margin:6
    },
    categoryImage:{
        marginTop:10,
        height:80,
        resizeMode:"contain",
    },
    categoryName:{
        fontSize:10,
        fontWeight:"bold",
        textAlign:"center"
    }
})