import {StyleSheet,Dimensions } from 'react-native'
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;
export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#661013",
        textAlign:"center",
        justifyContent:"center",
        paddingVertical:36,
        paddingHorizontal:12,
        flex:1,
    },
    input:{
        paddingHorizontal:20,
        paddingVertical:9,
        fontSize:14,
        fontWeight:"500",
        marginVertical:8,
        borderRadius:6,
        borderWidth:1,
        backgroundColor:"#fff",
        shadowOpacity:0
    },
    logo:{
        transform:[{
            scale:1.2
        }],
        resizeMode:"center",
    },

    image_box:{
        justifyContent:"center",
        alignItems:"center",
    },
    btn_login_text:{
        color:"white",
        textAlign:"center",
    },
    btn_login:{
        marginVertical:12,
        marginHorizontal:60,
        backgroundColor:"#B0171C",
        paddingVertical:12,
        borderRadius:6
    }
})