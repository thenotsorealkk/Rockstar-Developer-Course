import React from 'react';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'

const styles = {
     paper : {
          display : "flex"
     },
     input : {
          flexGrow: 1,
          padding : 10
     }
}

class Add extends React.Component {
     input = React.createRef();

     render(){
          return(
               <div>
                    <Paper elevation={1} style={styles.paper}>
                         <InputBase
                              placeholder = "New Task"
                              style={styles.input}
                              inputRef={this.input}
                         />
                         <IconButton onClick={() => {
                              let subject = this.input.current.value;
                              this.props.add(subject);
                              this.input.current.value = "";
                         }}>
                              <PlaylistAddIcon/>
                         </IconButton>


                    </Paper>
               </div>
          );
     }
}

export default Add;
