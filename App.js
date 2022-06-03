import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {SignIn} from "./pages/SignIn";

export default function App() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"sign_in"} component={SignIn} options={{
                    title:"",
                    headerBackButtonMenuEnabled:false,
                    headerShown:false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
