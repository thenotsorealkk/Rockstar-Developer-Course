import React from 'react';
import Item from './Item';
import List from '@material-ui/core/List';

class Todo extends React.Component {
     render(){
          var tasks = this.props.tasks.filter(task => {return task.status == 0});

          return(
               <List>
                    {tasks.map(task => {
                         return <Item done={this.props.done} remove={this.props.remove} key={task.id} task={task}/>;
                    })}
               </List>
          )
     }
}


export default Todo;
