import React from 'react';


class Item extends React.Component {
  render() {
    return (
         <li> {this.props.name} </li>
    );
  }
}


class App extends React.Component {
     constructor(){
          super();

          this.state = {
               data : ['Bob', 'Alice', 'Mary', 'tom']
          }
     }

  render() {
       //var data = ['Bob', 'Alice', 'Mary', 'tom']
    return (
         <div>
               <ul>
               <Item name="Apple"/>
               <Item name="Orange"/>
                    {this.state.data.map( item => <Item name={item}/> )}
               </ul>
         </div>
    );
  }
}

export default App;
