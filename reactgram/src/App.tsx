import {Routes, Route} from "react-router-dom";
import './global.css'; 
import SignInForm from "./_auth/forms/SignInForm.tsx";
import {Home} from "./root/pages";
import SignUpForm from "./_auth/forms/SignUpForm.tsx";
import AuthLayout from "./_auth/AuthLayout.tsx";
import RootLayout from "./root/RootLayout.tsx";
const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/*Public Routes*/}
                <Route element={<AuthLayout/>}>
                    <Route path="/sign-in" element={<SignInForm/>}></Route>
                    <Route path="/sign-up" element={<SignUpForm/>}></Route>
                </Route>

                {/*Private Routes*/}
                <Route element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </main>
    )
}

export default App