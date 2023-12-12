import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const List = (props) => {
  return (
  <div className='person'>
      <img src={props.image}/>
      <div>
        <h4>{props.name}</h4>
        <p>{props.age} years</p>
      </div>
        <CancelIcon onClick={() => {props.d(props.id)}} style={{width : '20px'}}/>
  </div>
  
  );
};

export default List;
