import React from 'react'
import Layout from "../components/layouts/Visitor";
import TinderCards from "../components/cards/TinderCards";
import SwipeButtons from "../components/swipes/SwipeButtons";


export default function Platform() {
    return (
      <Layout noFooter>
        <h1>Platform</h1>
        <TinderCards/>
      <SwipeButtons/>
      </Layout>
    
    );
}
