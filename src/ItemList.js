import React from 'react';
import './ItemList.css'
function ItemList({item,fun,del}){
    return(
        <ol>
        {
         item.map((itm) =>(
          <div className='out-list'>
           <li className='list' key={itm.id}>
             <input type="checkbox" checked={itm.checked} onClick={() =>fun(itm.id)} className='check-box'/>
             <label className='item-name'>{itm.name}</label>
             <button onClick={() => del(itm.id)} className='del'>Delete</button>
           </li>
           </div>
         ))
         }
       </ol>
    );
}
export default ItemList;
