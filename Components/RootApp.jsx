import {useDispatch, useSelector} from "react-redux";
import {createContext, useEffect, useMemo} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BeforeSignIn, RestoreToken, SignIn, SignInFailed, SignOut, SignUp} from "../features/authStore";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {SignInScreen} from "../Screens/SignInScreen";
import {CategoriesScreen} from "../Screens/CategoriesScreen";
import {ProductsScreen} from "../Screens/ProductsScreen";
import {CartScreen} from "../Screens/CartScreen";
import {ProfileScreen} from "../Screens/ProfileScreen";
import {HomeScreen} from "../Screens/HomeScreen";
import {LayoutScreen} from "../Screens/LayoutScreen";
import {ProductDetail} from "../Screens/ProductDetail";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";


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
                if (authenticators.hasOwnProperty('userToken')) {
                    if (userToken == null) {
                        userToken = authenticators.userToken
                    }
                }
            } catch (e) {
                console.log(e)
            }
            userToken = 'dummy_token'
            authDispatch(RestoreToken({token: userToken}))
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
                const fetchUser = async (username, password) => {
                    await wait()
                    return username === 'khanhdaica' && password === '12345678';
                }

                let username, password;

                if (data.hasOwnProperty('username') && data.hasOwnProperty('password')) {
                    username = data.username
                    password = data.password
                }

                if (await fetchUser(username, password)) {
                    userToken = 'khanh_dai_ca'
                } else {
                    authDispatch(SignInFailed({isErr: true}))
                    userToken = null
                }

                //restored token
                authDispatch(SignIn({token: userToken, isErr: userToken == null}))
            } catch (e) {
                console.log(e)
            }
        },
        signOut: () => {
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
                <LayoutScreen authContext={AuthContext}>
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
                                    }} component={ProfileScreen}>
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
                </LayoutScreen>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}