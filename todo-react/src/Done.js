import React from 'react';
import Item from './Item';


class Done extends React.Component {
     render(){
          var tasks = this.props.tasks.filter(task => {return task.status == 1});

          return(
               <ul>
                    {tasks.map(task => {
                         return <Item undo={this.props.undo} remove={this.props.remove} key={task.id} task={task}/>;
                    })}
               </ul>
          )
     }
}

export default Done;
