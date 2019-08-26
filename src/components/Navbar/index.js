import React, { Component } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import IconButton from '@material-ui/core/IconButton';


class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({ open: open });
    };
    

    render(){
        const { open } = this.state


        return (
            <div className={'content-master'}>
                <div className={'top'}>
                    <IconButton onClick={this.toggleDrawer(true)}><MenuIcon/></IconButton>
                    <span className={'title'} >YBMs</span>
                </div>
                <SwipeableDrawer
                    open={open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    <List>
                        <ListItem button key={'Home'}>
                            <ListItemIcon> <HomeIcon/> </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                        <ListItem button key={'Favorites'}>
                            <ListItemIcon> <FavoriteIcon/> </ListItemIcon>
                            <ListItemText primary={'Favorites'} />
                        </ListItem>
                        <ListItem button key={'About'}>
                            <ListItemIcon> <AnnouncementIcon/> </ListItemIcon>
                            <ListItemText primary={'About'} />
                        </ListItem>
                    </List>
                
                </SwipeableDrawer>
            </div>
        )
    }
}

export default (Navbar)