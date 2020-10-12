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
