import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends React.Component {
  state = {
    drawer : false,
  }
  toggleDrawer = (open) => () => {
    this.setState({
        drawer : open,
    });
  };

  render(){
    return(
      <Router>
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit">
              News
            </Typography>
          </Toolbar>
          </AppBar>
          <SwipeableDrawer
                open={this.state.drawer}
                onClose={this.toggleDrawer(false)}
                onOpen={this.toggleDrawer(true)}
              >
                <header style={{width: 200, height: 100, background: 'gray'}}> </header>
                <List>
                <ListItem>
                  <Link to="/" onClick={this.toggleDrawer(false)}>
                    <ListItemText primary="Home"> </ListItemText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/about" onClick={this.toggleDrawer(false)}>
                    <ListItemText primary="About"> </ListItemText>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact" onClick={this.toggleDrawer(false)}>
                    <ListItemText primary="Contact"> </ListItemText>
                  </Link>
                </ListItem>
                </List>
            </SwipeableDrawer>
            <Route exact path="/" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
        </div>
      </Router>
    )
  }
}

const Home = props => <h1> Home </h1>
const About = props => <h1> About </h1>
const Contact = props => <h1> Contact </h1>

export default App;
