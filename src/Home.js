import React from 'react';
import Card from './components/Card';
import data from './data';
import Navbar from './Navbar';
import { useState } from 'react';
import SmallDetail from './components/SmallDetail';



const Home = () => {

  const [searchData, setSearchData] = useState("");

  const[small_Data, setData] = useState(1);

    const handleSearchData = (data) => {
        setSearchData(data);
    };

    console.log(searchData);

    const userSearched= () => {

      if(searchData){
        const filteredItems = data.filter((item) => {

          return item.mainplace.toLowerCase().includes(searchData.toLowerCase());
      });

      return filteredItems.length > 0 ? filteredItems : data;
    }

      return data;
    }


    const handleChildData = (data)=>{
      setData(data);
    }




   
  
    const cards = userSearched().map(item => {
        return(
          <Card
              key={item.id}
              item={item} 
              
              sendDataToParent={handleChildData}
              />
        )
      });



  return (
    <div>
          
          <Navbar onSearch={handleSearchData} />

          <div className='main'>
            <section className="boddy">
              {cards}
            </section>

            <SmallDetail Id={small_Data}/>
          </div>
        
        
    </div>
  )
}

export default Home



