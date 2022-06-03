import {RootApp} from "./Components/RootApp";
import {Provider} from "react-redux";
import store from './app/Store'

export default function App() {
    return (
        <Provider store={store}>
            <RootApp></RootApp>
        </Provider>
    )
}
