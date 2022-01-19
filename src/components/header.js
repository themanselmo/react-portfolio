import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';

import { useState } from 'react';

import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [rightState, setRightState] = useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setRightState({ ...rightState, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Welcome', 'About', 'Projects', 'Blogs'].map((text, index) => (
              <HashLink smooth to={`/#${text}`}>
                <ListItem button key={text}>
                  
                    <ListItemText primary={text} />
                  
                </ListItem>
              </HashLink>
              
            ))}
          </List>
        </Box>
      );



      

    return (
        <div id="header">
          <div id="header-content">
            <h1>manselmo.dev</h1>
            <Button id="nav-button" onClick={toggleDrawer('right', true)}><DehazeIcon id="nav-button"/></Button>
          </div>
            <Drawer 
                anchor={'right'}
                open={rightState['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    )
}

export default Header