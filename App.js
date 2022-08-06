import {RootApp} from "./Components/RootApp";
import {Provider} from "react-redux";
import store from './app/Store'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient();
export default function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RootApp></RootApp>
            </QueryClientProvider>
        </Provider>
    )
}
