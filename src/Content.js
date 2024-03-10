import ItemList from './ItemList';
import './Content.css'
function Content({item,fun,del})
{
    return(
       <main>
          {(item.length) ?(
          <ItemList 
          item={item} 
          fun={fun}
          del={del}
          />
):<div className='empty-list'>Your list is empty</div>}
       </main>
    );
}

export default Content;