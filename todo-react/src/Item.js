import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
     typo : {
          flexGrow : 1
     }
}

class Item extends React.Component {
     render(){
          return(
                    <ListItem>
                         {
                              this.props.task.status === 1?
                                   <Checkbox checked={1} disableRipple onChange={()=>{
                                        this.props.undo(this.props.task.id)
                                   }}  />

                              :
                                   <Checkbox checked={0} disableRipple onChange={()=>{
                                        this.props.done(this.props.task.id)
                                   }}  />


                         }

                              <Typography style={styles.typo}> {this.props.task.subject} </Typography>

                              <IconButton onClick={()=> {
                                   this.props.remove(this.props.task.id)
                              }}>
                                   <DeleteIcon />
                              </IconButton>
                    </ListItem>
          );
     }
}


export default Item;
