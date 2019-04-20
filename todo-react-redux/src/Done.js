import React from 'react';
import Item from './Item';
import List from '@material-ui/core/List';


class Done extends React.Component {
     render(){
          var tasks = this.props.tasks.filter(task => {return task.status == 1});

          return(
               <List>
                    {tasks.map(task => {
                         return <Item undo={this.props.undo} remove={this.props.remove} key={task.id} task={task}/>;
                    })}
               </List>
          )
     }
}

export default Done;
