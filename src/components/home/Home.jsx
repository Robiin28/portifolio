import React from "react";
import  {Myhome}  from "./Myhome";
import { About } from "./../pages/About";
import {Service} from "../pages/Service";
import { Skill } from "../pages/Skill";
import { Contact } from "./../pages/Contact";
import {Portfolio } from "./../pages/Portifolio";
import {Blog} from "./../pages/Blog";
import {Footer} from "./../common/Footer";

export const Home=()=>{
    return(
        <>
            <div>
                    <Myhome />
                    <About />
                    <Service />
                    <Portfolio />
                    <Skill />
                    <Blog />
                    <Contact />
                    <Footer />
                  
                    

            </div>
          
        </>
    )
} 