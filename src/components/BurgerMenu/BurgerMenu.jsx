import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, useTheme } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const listItemProps = {
    marginBottom: '10px',
    borderBottom: `1.5px solid ${theme.palette.primary.light}`,
  };

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ color: 'white' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem component={Link} to="/news" sx={listItemProps}>
          <ListItemText
            align="center"
            primary={
              <Typography variant="h3" component="p">
                новини
              </Typography>
            }
            variant="h3"
          />
        </ListItem>
        <ListItem component={Link} to="/about" sx={listItemProps}>
          <ListItemText
            align="center"
            primary={
              <Typography variant="h3" component="p">
                про нас
              </Typography>
            }
            variant="h3"
          />
        </ListItem>
        <ListItem component={Link} to="/contacts" sx={listItemProps}>
          <ListItemText
            align="center"
            primary={
              <Typography variant="h3" component="p">
                контакти
              </Typography>
            }
            variant="h3"
          />
        </ListItem>
        <ListItem component={Link} to="/support">
          <ListItemText
            align="center"
            primary={
              <Button>
                підтримати <TrendingFlatIcon sx={{ marginLeft: '10px' }} />
              </Button>
            }
            variant="h3"
            component="p"
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ backdropFilter: 'blur(5px)' }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
