import React from 'react';
import Item from './Item';

class List extends React.Component {
     render(){
          var data = this.props.data;
          return(
               <ul>
                    {data.map(item => {
                         return <Item name={item}/>
                    })}
               </ul>
          )
     }
}

export default List;
