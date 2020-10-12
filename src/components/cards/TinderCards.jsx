import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../../config/firebase'
import './TinderCards.css';
//import { Container, Div, CardContainer } from './styles';

//import database from './firebase';


function TinderCards() { //method that push into  an array in react
const[people,setPeople]=useState([]);
    // {
    //    name: 'john',
    //     url: "https://unwinnable.com/wp-content/uploads/2017/05/Panther.jpg"     },     {
    //     name:'roni',
    //      url:'https://static.toiimg.com/photo/msid-74635724/74635724.jpg?395601',
    // },

//useState //to decalre var to an array
     useEffect(() => { //code that runs on a condition
    // the code runs here    

    //     const unsubscribe = 
             database.collection('people')
          .onSnapshot((snapshot) =>  //event listener for changes
             setPeople(snapshot.docs.map((doc) => doc.data()))//loop through the ddatabse and get the people
          );
    //     return () => {
    //         unsubscribe();
    //     };

     }, []);// if its left empty it will run once only 

    return(
        <div>
        
        <div className="tinderCards__cardContainer">
            {people.map(person => ( //{/*loop through the list of people untill the end of list --*/}
            <TinderCard
                className="swipe"
                key={person.name}//give a key to a list as unique identifier alloeingreact to rerender a list 
                
                preventSwipe={['up','down']}
                >
               <div
                   style={{ backgroundImage:`url(${person.url})`}}
                   className="card"
               >
                   <h3>{person.name}</h3>
                   
                   </div>
            </TinderCard>
          ))}  
         </div>
        </div>
        
    );
   
    }
    


export default TinderCards;