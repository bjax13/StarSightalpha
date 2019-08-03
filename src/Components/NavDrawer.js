import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { fromJS } from 'immutable';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const menuItems = fromJS(
[{
      name: 'Home',
      icon: <HomeIcon />,
  },{
    name: 'Mail',
    icon: <MailIcon />,
  },{
    name: 'Inbox',
    icon: <InboxIcon />,
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
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
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