import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import NavDrawer from './NavDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        menu: false,
      });
    
    const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({
        ...state,
        menu: open,
        pathname: window.location.pathname,
        });
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          {NavDrawer(toggleDrawer, state.menu)}
          <Toolbar>
            <IconButton  onClick={toggleDrawer(!state.menu)} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {(state.pathname === '/') ? 'Home' :  state.pathname}
            </Typography>
            <Button component={Link} to='login' color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

