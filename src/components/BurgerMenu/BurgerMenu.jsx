import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import { Typography, useTheme } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

import { MoreArrowIcon } from 'components/MockupIcons/MockupIcons';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const itemProps = { margin: '26px' };

  const listItemProps = {
    borderBottom: `1.5px solid ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.background.contrast,
    padding: 0,
    margin: 0,
  };

  const bgColor = path => {
    return location.pathname === path
      ? theme.palette.background.contrast
      : null;
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
      <List sx={{ paddingTop: '76px', height: '100vh' }}>
        <ListItem
          component={Link}
          to="/news"
          sx={{ ...listItemProps, backgroundColor: `${bgColor('/news')}` }}
        >
          <ListItemText
            align="center"
            primary={
              <Typography variant="h3" component="p" sx={itemProps}>
                новини
              </Typography>
            }
            variant="h3"
          />
        </ListItem>
        <ListItem
          component={Link}
          to="/"
          sx={{ ...listItemProps, backgroundColor: `${bgColor('/')}` }}
        >
          <ListItemText
            align="center"
            primary={
              <Typography variant="h3" component="p" sx={itemProps}>
                головна
              </Typography>
            }
            variant="h3"
          />
        </ListItem>
        <ListItem
          component={Link}
          to="/contacts"
          sx={{ ...listItemProps, backgroundColor: `${bgColor('/contacts')}` }}
        >
          <ListItemText
            align="center"
            primary={
              <Typography variant="h3" component="p" sx={itemProps}>
                контакти
              </Typography>
            }
            variant="h3"
          />
        </ListItem>
        <ListItem
          component={Link}
          to="/support"
          sx={{ backgroundColor: `${bgColor('/support')}` }}
        >
          <ListItemText
            align="center"
            primary={
              <Button
                sx={{
                  ...itemProps,
                  fontSize: {
                    phone: ' 30px',
                  },
                  LineHeight: {
                    phone: '36px',
                  },
                  paddingLeft: {
                    phone: '40px',
                  },
                  paddingRight: {
                    phone: '40px',
                  },
                }}
              >
                підтримати
                <MoreArrowIcon />
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
    <>
      <Hamburger
        size={20}
        toggled={open}
        toggle={toggleDrawer(!open)}
        color="#455A64"
      />
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ backdropFilter: 'blur(5px)' }}
      >
        {list()}
      </Drawer>
    </>
  );
}
