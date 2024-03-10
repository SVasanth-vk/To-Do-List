import React from 'react';
import './AddItem.css';
function AddItem({newitem,setnewitm,handleSubmit}){
    return(
        <form onSubmit={(e)=> handleSubmit(e)} className='out-div'>
            <input type="text" placeholder='Add Items'value={newitem}
            onChange={(e)=>setnewitm(e.target.value)} className='add-item'/>
            <button type='submit' className='add-btn'> Add </button>
        </form>
    )
}
export default AddItem;