import React, {useState} from 'react'
import {Image, Text,View, TouchableOpacity, TextInput} from 'react-native'
import logo from '../assets/images/logo-full.png'
import {styles} from '../styles/sign-in'

export const SignIn = ({route, navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (<View style={styles.container}>
        <View style={styles.image_box}>
            <Image source={logo} style={styles.logo}/>
        </View>
        <TextInput onChangeText={newText => setUsername(newText)} placeholder={"Email"} style={styles.input}/>
        <TextInput secureTextEntry={true} onChangeText={newText => setPassword(newText)} placeholder={"Mật khẩu"} style={styles.input}/>
        <TouchableOpacity activeOpacity={0.7} style={styles.btn_login}><Text style={styles.btn_login_text}>ĐĂNG NHẬP</Text></TouchableOpacity>
    </View>)
}