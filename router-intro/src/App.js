import React from 'react';
import MyAppBar from './MyAppBar';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
          <MyAppBar toggleDrawer = {this.toggleDrawer} count={4} />
          <br/> <br/>
          Not having count property or giving non-numeric value will result in error in console
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
            <BottomNavigation
              style={{ position : 'absolute', bottom : 0, width: '100%'}}
            >
              <Link to="/more/recents">
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                </Link>
              <Link to="/more/favorites">
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
              </Link>
              <Link to="/more/location">
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </Link>
            </BottomNavigation>


            <Route exact path="/" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
            <Route path="/more/:label" component = {More} />


        </div>
      </Router>
    )
  }
}

const Home = props => <h1> Home </h1>
const About = props => <h1> About </h1>
const Contact = props => <h1> Contact </h1>
const More = props => <h1> More - {props.match.params.label} </h1>

export default App;
