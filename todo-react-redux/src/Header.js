import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
     bar : {
          marginBottom : 20
     },
     typo : {
          marginLeft : 20,
          flexGrow : 1
     }
};

class Header extends React.Component {

     state = {
          anchorEl : null,
          open : false
     }
     menuOpen = (e) => {
          this.setState({
               anchorEl: e.currentTarget,
               open: true
          });
     }

     menuClose = () => {
          this.setState({
               anchorEl : null,
               open : false
          });
     }


     render() {
          return(
               <AppBar position="static" style={styles.bar}>
                    <Toolbar>
                         <Badge color="secondary" badgeContent={this.props.count}>
                         <DoneAllIcon style={styles.logo} />
                         </Badge>
                         <Typography style={styles.typo} variant="h6" color="inherit">
                              {this.props.name}
                         </Typography>
                         <IconButton color="inherit" onClick={this.menuOpen}>
                            <MoreVertIcon />
                         </IconButton>
                         <Menu
                              anchorEl = {this.state.anchorEl}
                              open = {this.state.open}
                              onClose = {this.menuClose}
                         >
                              <MenuItem onClick={() => {
                                   this.menuClose();
                                   if (this.props.name==="Todo") {
                                        this.props.clearAllToDo();
                                   }
                                   else if (this.props.name==="Done") {
                                        this.props.clearAllDone();
                                   }
                                   }}>
                                   Clear
                              </MenuItem>
                         </Menu>
                    </Toolbar>
               </AppBar>

          )
     }
}

export default Header;
