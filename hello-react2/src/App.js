import React from 'react';
import Item from './Item';
import List from './List';
import Add from './Add';


class App extends React.Component {
     constructor(){
          super();
          // this.input = React.createRef();
          this.state = {
               data : ['Mike', 'John']
          }
          this.add = this.add.bind(this);
          this.remove = this.remove.bind(this);
     }

     remove(name){
          this.setState({
               data: this.state.data.filter(item => item != name)
          })
     }
     add(name) {
          this.setState({
               data : [
                    ...this.state.data, name// Dissembling the array
                    // this.input.current.value
                    // [...this.state.data, this.input.current.value]
                    // ['Mike', 'John', this.input.current.value]
               ]

          });
          // this.input.current.value = "";
     }

     render(){
          var data = ['Bob','Mary'];
          return(
               <div>
                    <List data={this.state.data} remove={this.remove}/>
                    <Add add={this.add} />
               </div>
          )
     }
}

export default App;
