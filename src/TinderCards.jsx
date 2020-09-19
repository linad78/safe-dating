import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from'./Firebase';
import './TinderCards.css';
//import { Container, Div, CardContainer } from './styles';

//import database from './Firebase';


function TinderCards() { //method that push into  an array in react
const[people,setPeople]=useState([
    {
       name: 'john',
        url: "https://unwinnable.com/wp-content/uploads/2017/05/Panther.jpg"     },     {
        name:'roni',
         url:'https://static.toiimg.com/photo/msid-74635724/74635724.jpg?395601',
    },

]);//useState to decalre var to an array
    // useEffect(() => {
    //     //isto vai ser para o código rodar

    //     const unsubscribe = database
    //         .collection('people')
    //         .onSnapshot(snapshot => {
    //             setPeople(snapshot.docs.map(doc => doc.data()))
    //         });
    //     return () => {
    //         unsubscribe();
    //     };

    // }, [])

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