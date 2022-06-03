import {Provider, useDispatch, useSelector} from "react-redux";
import {createContext, useEffect, useMemo, useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BeforeSignIn, RestoreToken, SignIn, SignInFailed, SignOut, SignUp} from "../features/authStore";
import {NavigationContainer} from "@react-navigation/native";
import {SignInScreen} from "../Screens/SignInScreen";
import {HomeScreen} from "../Screens/HomeScreen";

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
                            (<Stack.Screen name={"home"} options={{
                                title: "",
                                headerBackButtonMenuEnabled: false,
                                headerShown: false
                            }}>
                                {(props) => <HomeScreen authContext={AuthContext}  {...props}/>}
                            </Stack.Screen>)
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}