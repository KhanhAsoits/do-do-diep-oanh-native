import {View, Text, TextInput, Button} from 'react-native'
import {useContext} from "react";

export const HomeScreen = ({route,navigation,authContext}) => {

    const {signOut} = useContext(authContext)
    const handleLogOut = () => {
        signOut()
    }
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title={'LOGOUT'} onPress={handleLogOut}></Button>
        </View>
    )
}