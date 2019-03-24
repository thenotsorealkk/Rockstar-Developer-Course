import React from 'react';
import Item from './Item';

class Todo extends React.Component {
     render(){
          var tasks = this.props.tasks.filter(task => {return task.status == 0});

          return(
               <ul>
                    {tasks.map(task => {
                         return <Item done={this.props.done} remove={this.props.remove} key={task.id} task={task}/>;
                    })}
               </ul>
          )
     }
}


export default Todo;
