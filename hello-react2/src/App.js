import React from 'react';
import Item from './Item';
import List from './List';


class App extends React.Component {
     constructor(){
          super();
          this.input = React.createRef();
          this.state = {
               data : ['Mike', 'John']
          }
          this.add = this.add.bind(this);
     }


     add() {
          this.setState({
               data : [
                    ...this.state.data, // Dissembling the array
                    this.input.current.value
                    // [...this.state.data, this.input.current.value]
                    // ['Mike', 'John', this.input.current.value]
               ]

          })
          this.input.current.value = "";
     }

     render(){
          var data = ['Bob','Mary'];
          return(
               <div>
                    <List data={data} />
                    <List data={this.state.data} />
                    <input type="text" ref={this.input} />
                    <button onClick={this.add}>+</button>
               </div>
          )
     }
}

export default App;
