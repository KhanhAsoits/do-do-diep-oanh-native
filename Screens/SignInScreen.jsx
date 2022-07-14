import React, {useContext, useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import logo from '../assets/images/logo-full.png'
import {styles} from '../styles/sign-in'
import {Alert} from "../Components/Alert";
import {useDispatch, useSelector} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay'

export const SignInScreen = ({route, navigation,authContext}) => {

    const authenticator = useSelector(state => state.authenticate)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {signIn} = useContext(authContext)
    // set show if err
    const handleLogin = () => {
        signIn({username, password})
    }

    return (
        <View style={styles.container}>
            <Spinner visible={authenticator.isLoading}/>
            {!!authenticator.isErr && <Alert message={authenticator.errMsg}/>}
            <View style={styles.image_box}>
                <Image source={logo} style={styles.logo}/>
            </View>
            <TextInput
                onChangeText={newText => setUsername(newText)}
                placeholder={"Email"}
                style={styles.input}
                autoFocus={true}
                value={username}
            />
            <TextInput
                secureTextEntry={true}
                onChangeText={newText => setPassword(newText)}
                placeholder={"Mật khẩu"}
                style={styles.input}
                value={password}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn_login}
                onPress={handleLogin}>

                <Text style={styles.btn_login_text}>
                    ĐĂNG NHẬP
                </Text>
            </TouchableOpacity>
        </View>
    )
}