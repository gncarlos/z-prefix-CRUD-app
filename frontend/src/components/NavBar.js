import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);


  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (pageUrl) => {
    history.push(pageUrl)
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent' elevation={0}>
        <Toolbar>
          <div>
            <IconButton edge="start" className={classes.menuButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={()=>handleClose('/')}>Home</MenuItem>
              {/* <MenuItem onClick={()=>handleClose('/saved-quotes')}>Saved Quotes</MenuItem> */}
              <MenuItem onClick={()=>handleClose('/created-quotes')}>Created Quotes</MenuItem>
            </Menu>
          </div>
          <Typography className={classes.title}>
          </Typography>
          {/* <Button>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;