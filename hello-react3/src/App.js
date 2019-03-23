import React from 'react';
import List from './List';
import Item from './Item';
import Add from './Add';


class App extends React.Component {
     state = {
          data : ["Apple", "Banana"]
     }
     add = (input) => {
          this.setState({
               data: [...this.state.data, input]
          });
     }
     remove = (name) =>{
          this.setState({
               data: this.state.data.filter(item => item!=name)
          })
     }
  render() {
       return (
            <div>
               <List data={this.state.data}  remove={this.remove}> </List>
               <Add add={this.add}> </Add>
          </div>
       );
  }
}

export default App;
