import React from 'react';
import data from '../data';

const SmallDetail = (props) => {

   

  

  const item = data.find((item) => item.id === props.Id);
  return (
    <div className='side_view'>
        <h2>{item.mainplace}</h2>
    </div>
  )
}

export default SmallDetail