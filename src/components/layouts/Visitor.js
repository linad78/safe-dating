import React from 'react'
import Header from '../../Header'
import Footer from '../Footer'

//const Visitor = () =>

function Visitor({children,noHeader,noFooter}) { //old way // hoisting 
    return (
      <div>
        {!noHeader && <Header />}
        {children}
        {!noFooter && <Footer />}
      </div>
    );
}

export default Visitor;

