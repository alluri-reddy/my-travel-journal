import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";

import InDetail from "./components/InDetail";


export default function App(){

  
    return(
        <div>


        
        

          
            <Routes>
                <Route path='/' element={<Home  />} />
                <Route path='/card/:id' element= {<InDetail />} />
            </Routes>
          
             
          

          

        </div>
    )
}