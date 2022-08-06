import {useDispatch, useSelector} from "react-redux";
import {createContext, useEffect, useMemo} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BeforeSignIn, RestoreToken, SignIn, SignInFailed, SignOut, SignUp} from "../features/authStore";
import {NavigationContainer} from "@react-navigation/native";
import {SignInScreen} from "../Screens/SignInScreen";
import {CategoriesScreen} from "../Screens/CategoriesScreen";
import {ProductsScreen} from "../Screens/ProductsScreen";
import {CartScreen} from "../Screens/CartScreen";
import {ProfileScreen} from "../Screens/ProfileScreen";
import {HomeScreen} from "../Screens/HomeScreen";
import {ProductDetail} from "../Screens/ProductDetail";
import {loginAPI} from "../API/AuthAPI";
import {validateEmail} from "../helpers/email";
import * as LocalStorage from 'expo-secure-store'
import {restore_token} from "../API/BaseAPI";

export const RootApp = () => {
    // get state by Auth reducer
    const authenticators = useSelector(state => state.authenticate)
    // create dispatch
    const authDispatch = useDispatch()
    // get oke

    // create authenticate context to process auth
    const AuthContext = createContext({})
    //create Stack navbar
    const Stack = createNativeStackNavigator()

    // useEffect TO GET USER TOKEN IN LOCAL

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken = null
            try {
                authDispatch(BeforeSignIn())
                let token = await LocalStorage.getItemAsync('api_token') || null
                if (token){
                    userToken = token
                }
                authDispatch(RestoreToken({token: userToken}))
            } catch (e) {
                console.log(e)
            }
        }
        bootstrapAsync();
    }, [])
    /// end side effect

    // create auth context

    const authContext = useMemo(() => ({

        signIn: async (data) => {

            // fetch user to server here
            try {

                authDispatch(BeforeSignIn())

                let userToken
                const wait = () => {
                    return new Promise(resolve => setTimeout(resolve, 2000))
                }
                const fetchUser = async (email, password) => {
                    try {
                        await wait()
                        let res = await loginAPI(email, password)
                        if (res){
                            await restore_token(res.token)
                            userToken = res.token
                        }else {
                            authDispatch(SignInFailed({isErr:true,msg:'Tai Khoan Hoac Mat Khau Khong Chinh Xac'}))
                        }
                    } catch (e) {
                        console.log(e)
                    }
                }
                let email, password;

                if (data.hasOwnProperty('username') && data.hasOwnProperty('password')) {
                    email = data.username
                    password = data.password
                }
                if (email.trim() !== '' && password.trim() !== '') {
                    if (validateEmail(email)) {
                        await fetchUser(email, password)
                    } else {
                        authDispatch(SignInFailed({isErr: true, msg: 'Email Not Valid!'}))
                    }
                } else {
                    authDispatch(SignInFailed({isErr: true, msg: 'Email or password not empty!'}))
                    userToken = null
                }
                //restored token
                authDispatch(SignIn({token: userToken, isErr: userToken == null, msg: userToken == null ? 'Email or Password Incorrect!':''}))
            } catch (e) {
                console.log(e)
            }
        },
        signOut: async () => {
            await LocalStorage.deleteItemAsync('api_token')
            authDispatch(SignOut())
        },
        signUp: async (data) => {
            let userToken = 'khanh_dai_ca'
            authDispatch(SignUp({token: userToken}))
        }
    }), [])

    // layout page

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        authenticators.userToken == null
                            ?
                            (
                                <Stack.Screen name={'sign_in'} options={{
                                    title: "",
                                    headerShown: false,
                                    headerBackButtonMenuEnabled: false
                                }}>
                                    {(props) => <SignInScreen authContext={AuthContext}  {...props}/>}
                                </Stack.Screen>
                            )
                            :
                            <Stack.Group>
                                <Stack.Screen name={"home"} options={{
                                    title: "",
                                    headerBackButtonMenuEnabled: false,
                                    headerShown: false
                                }}>
                                    {(props) => <HomeScreen authContext={AuthContext}  {...props}/>}
                                </Stack.Screen>
                                <Stack.Screen name={"categories"} options={{
                                    title: "",
                                    headerBackButtonMenuEnabled: false,
                                    headerShown: false
                                }} component={CategoriesScreen}>
                                </Stack.Screen>
                                <Stack.Screen name={"products"} options={{
                                    title: "",
                                    headerBackButtonMenuEnabled: false,
                                    headerShown: false
                                }} component={ProductsScreen}>
                                </Stack.Screen>
                                <Stack.Screen name={"cart"} options={{
                                    title: "",
                                    headerBackButtonMenuEnabled: false,
                                    headerShown: false
                                }} component={CartScreen}>
                                </Stack.Screen>
                                <Stack.Screen name={"profile"} options={{
                                    title: "",
                                    headerBackButtonMenuEnabled: false,
                                    headerShown: false
                                }}>
                                    {(props)=><ProfileScreen AuthContext={AuthContext}  {...props}></ProfileScreen>}
                                </Stack.Screen>
                                <Stack.Screen name={"product_detail"} options={{
                                    title: "",
                                    headerBackButtonMenuEnabled: true,
                                    headerShown: true,

                                }} component={ProductDetail}>
                                </Stack.Screen>
                            </Stack.Group>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
