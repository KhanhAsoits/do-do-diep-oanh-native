import * as LocalStorage from 'expo-secure-store'

export const BASE_URI = 'https://dodongdiepoanh.com/api'

export const restore_token = async (token) => {
    try {
        if (token) {
            await LocalStorage.setItemAsync('api_token', token)
            console.log('restore success!')
            return true
        } else {
            console.log('token not valid!')
            return false
        }
    } catch (e) {
        console.log('err when restore token ', e)
        return false
    }
}