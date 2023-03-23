import React from "react";
import Home from '../componets/home';
import Pregunta from '../componets/Pregunta';
import Resultado from "../componets/Resultado";
import Forms from "../componets/forms";
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import {PreguntaContextProvider } from "../context/PreguntaContext";



const Index = () =>{
       
    return(
    
    <PreguntaContextProvider>
      <Router>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/registro' element={<Forms/>}/> 
           <Route path='/pregunta' element={<Pregunta/>}/> 
           <Route path='/resultado' element={<Resultado/>}/> 
         </Routes>
      </Router>
    </PreguntaContextProvider> 
    
   
    )   
}
export default Index;