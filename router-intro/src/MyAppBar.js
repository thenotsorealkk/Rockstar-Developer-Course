import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types'; // npm i prop-types

class MyAppBar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu"  onClick={this.props.toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            React Router ({this.props.count})
          </Typography>
        </Toolbar>
        </AppBar>
    )
  }

}
MyAppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  count : PropTypes.number.isRequired
};
//Rules for what types should the given properties be
//Help in finding errors :D

export default MyAppBar;
