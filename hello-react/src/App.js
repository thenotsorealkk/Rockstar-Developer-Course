import React from 'react';
import Item from './Item';
import Add from './Add'


class App extends React.Component {
     constructor(){
          super();
          this.state = {
               data : ['Bob', 'Alice', 'Mary', 'Tom']
          }
          this.add = this.add.bind(this);
     }

     add(name) {
          var data = this.state.data;
          // var name = this.input.current.value;

          data.push(name);

          this.setState({
               data: data
          });

     }

  render() {
       //var data = ['Bob', 'Alice', 'Mary', 'Tom']
    return (
         <div>
               <ul>
               <Item name="Apple"/>
               <Item name="Orange"/>
                    {this.state.data.map( item => <Item name={item}/> )}
               </ul>
               <Add add={this.add} />

         </div>
    );
  }
}

export default App;
