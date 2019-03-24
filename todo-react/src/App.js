import React from 'react';
import Header from './Header';
import Item from './Item';
import Done from './Done';
import Todo from './Todo';
import Add from './Add';

class App extends React.Component {


     done = (id) => {
          this.setState({
               tasks : this.state.tasks.map(item => {
                         if (item.id == id){
                              item.status = 1;
                         }
                         return item;
                    })

          })
     }

     clearAllDone = () => {
          this.setState({
               tasks: this.state.tasks.filter(item => item.status === 0)
          })
     }

     undo = (id) => {
          this.setState({
               tasks : this.state.tasks.map(item => {
                         if (item.id == id){
                              item.status = 0;
                         }
                         return item;
                    })

          })
     }
     add = (subject) => {
          let newTask = {id : ++this.autoid, subject, status : 0};
          this.setState({
               tasks : [
                    ...this.state.tasks, newTask
               ]
          })
     }
     remove = (id) => {
          this.setState({
               tasks : this.state.tasks.filter(task => task.id !== id)
          })
     }
     autoid = 4;
     state = {
          tasks : [
               {id : 1, subject : "Buy a rope", status : 1},
               {id : 2, subject : "Tie the rope to the ceiling", status : 1},
               {id : 3, subject : "Get a chair", status : 0},
               {id : 4, subject : "Get on the chair with the rope around the neck", status : 0}
          ]

     }
     render(){
          return(
               <div>
                    <Header count={this.state.tasks.filter(task => {
                         return task.status == 0;
                    }).length} name="Todo"/>

                    <Todo done={this.done} remove={this.remove} tasks={this.state.tasks}> </Todo>

                    <hr/>

                    <Header count={this.state.tasks.filter(task => {
                         return task.status == 1;
                    }).length} name="Done" />

                    <Done undo={this.undo} remove={this.remove} tasks={this.state.tasks}> </Done>

                    <hr/>
                    <button onClick={this.clearAllDone}> Clear All Done </button>
                    <Add add={this.add}/>

               </div>
          );
     }
}

export default App;
