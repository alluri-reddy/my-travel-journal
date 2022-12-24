import React from "react"
import Card from "./Card"
import Navbar from "./Navbar"
import data from "./data"

export default function App(){
  const cards = data.map(item => {
    return(
      <Card
          key={item.id}
          item={item} 

      />
    )
  })
    return(
        <div>
          <Navbar />
          <section className="boddy">
             {cards}
          </section>
            
          
            
          
        </div>
    )
}