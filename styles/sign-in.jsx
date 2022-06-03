import {StyleSheet,Dimensions } from 'react-native'
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;
export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#661013",
        textAlign:"center",
        justifyContent:"center",
        padding:36,
        flex:1,
    },
    input:{
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:14,
        fontWeight:"500",
        marginVertical:10,
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
        marginHorizontal:50,
        backgroundColor:"#B0171C",
        paddingVertical:16,
        borderRadius:6
    }
})