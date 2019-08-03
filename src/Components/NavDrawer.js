import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GraidientIcon from '@material-ui/icons/Gradient';
import HomeIcon from '@material-ui/icons/Home';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import { fromJS } from 'immutable';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const menuItems = fromJS([
  {
      name: 'Home',
      icon: <HomeIcon />,
  },{
    name: 'Colors',
    icon: <GraidientIcon />,
  },{
    name: 'Login',
    icon: <TransitEnterexitIcon />,
  },
]);

export default function NavDrawer(toggleDrawer, menuStatus) {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem button key={menuItem.get('name')}>
            <ListItemIcon>{menuItem.get('icon').toJS()}</ListItemIcon>
            <ListItemText primary={menuItem.get('name')} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
    open={menuStatus}
    onClose={toggleDrawer(false)}
    onOpen={toggleDrawer(true)}
    >
    {sideList()}
    </SwipeableDrawer>
  );
}