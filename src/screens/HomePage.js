import React from "react";
import Layout from "../components/layouts/Visitor";
import Login from "../components/login/Login";
//import SignUp from "../components/signup/SignUp";
//import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <Layout noHeader>
      <Login />
    </Layout>
  );
}
/*
const LoginForm = ()=><div>Login Form</div>
const SignupForm = () => <div>Signup Form</div>

export default function HomePage() {
    const [mode,setMode] = React.useState(0)
    return (
        <Layout>
            <div className="text-center w-full mt-2">
            <div className="max-w-xs mx-auto">
            <ul className="flex border-b">
                <li className="-mb-px mr-1">
                    <a onClick={e=>setMode(0)} className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" >Login</a>
                </li>
                <li className="mr-1">
                    <a onClick={e => setMode(1)} className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Signup</a>
                </li>
                </ul>     
                {mode ===0 && <LoginForm/>}
                {mode === 1 && <SignupForm />}
</div>
            </div>
        </Layout>
    )
}
*/
