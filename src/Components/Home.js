import React, { Component } from "react";
import Head from './Head';
import Foot from './Foot';
import Section from './Section';
import Main from './Main';


const Home = () => {
    return(
            <div>
               <Head/>
               <Section/>

               <Main/>

               <Foot/>



            </div>
    )
}

export default Home;