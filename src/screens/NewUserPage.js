import React from 'react'
import SignUp from "../components/signup/SignUp";
import Layout from "../components/layouts/Visitor";
import database,{signup} from "../config/firebase";

export default function NewUserPage() {
  React.useEffect(()=>{
    
    // Add a new document in collection "cities"
   var userId = "12345" // this value will come after signup/login using firebase
   var  pqr = database
    pqr.collection("profiles")
      .doc(userId)
      .set({
        firstName: "",
        lastName:"",
        age: "",
        Gender: "",
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
      
  },[])// on page load
    return (
      <Layout noHeader>
      <SignUp />
    </Layout>
  );
}