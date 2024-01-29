import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';



const InDetail = () => {

  const { id } = useParams(); 

  
  const itemId = parseInt(id, 10);
  const item = data.find((item) => item.id === itemId);

  
    
  return (
    <div>
      <h2>{item.mainplace}</h2>
      
    </div>
  );
};

export default InDetail;