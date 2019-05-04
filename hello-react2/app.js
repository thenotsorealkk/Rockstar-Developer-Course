import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class App extends React.Component{
     render(){
          return(
               <div>
                    <AppBar position="static">
                       <Toolbar>
                         <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                           <MenuIcon />
                         </IconButton>
                         <Typography variant="h6" color="inherit" className={classes.grow} style={{flexGrow: 1}}>
                           News
                         </Typography>
                         <Button color="inherit">Login</Button>
                       </Toolbar>
                     </AppBar>
               </div>
          );
     }
}
