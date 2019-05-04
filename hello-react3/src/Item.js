import React from 'react';


class Item extends React.Component{
     render(){
          return(
                    <li> {this.props.name}
                    <button onClick={
                         ()=>{
                              this.props.remove(this.props.name);
                         }
                    }> - </button> </li>
          );
     }
}
export default Item;
