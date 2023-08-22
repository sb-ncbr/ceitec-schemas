import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Breadcrumbs, ListItemAvatar, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { ReactNode } from 'react';
import { AccountCircle, Language, NavigateNext, Workspaces } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
import Page from './Page';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

type LayoutProps = {
  title?: string,
  children: ReactNode
}
const Layout = ({title, children}: LayoutProps): JSX.Element => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{background: "#7ac143"}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              CEITEC Data Management Portal
            </Typography>
            <IconButton color="inherit">
                <Language />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="primary">
                <Workspaces />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Avatar src='https://www.gravatar.com/avatar/5b04ee4112fdaa5a6cae2757b52d57a5' />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          {/* <Divider /> */}
          {/* <ListItemButton>
          {open ? (
              <Paper sx={{m: 2, p: 1}} elevation={2}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar src='https://www.gravatar.com/avatar/5b04ee4112fdaa5a6cae2757b52d57a5' />
                    </Grid>
                    
                    <Grid item>
                        <Typography>Welcome, Adrian</Typography>
                        <Typography variant="caption">View profile</Typography>
                    </Grid>
                </Grid>
            </Paper>
            ) : (
                <Avatar src='https://www.gravatar.com/avatar/5b04ee4112fdaa5a6cae2757b52d57a5' />
                )}
            </ListItemButton> */}
          <List component="nav">
            <ListItemButton sx={{background: "linear-gradient(90deg, rgba(92, 40, 92, 1) 0%, rgba(50, 40, 92, 1) 100%)", color: "#FFF", borderRadius: 3, m: 1}}>
                <ListItemAvatar>
                    <Avatar src='https://www.gravatar.com/avatar/5b04ee4112fdaa5a6cae2757b52d57a5' />
                </ListItemAvatar>
                <ListItemText primary={"Welcome, Adrian!"} secondary="View profile" secondaryTypographyProps={{color: "#FFF"}}/>
            </ListItemButton>
            <ListSubheader>
              <Typography variant="subtitle2" sx={{textTransform: "uppercase"}}>
                Projects
              </Typography>
            </ListSubheader>
            <ListItemButton onClick={() => navigate("/projects")}>
                <ListItemText primary={"Your Projects"} />
            </ListItemButton>
            <ListItemButton>
            <ListItemText primary={"New Project"} />
            </ListItemButton>
            {/* <ListSubheader>
                Services
            </ListSubheader>
            <ListItemButton>
                <ListItemText primary={"Your Services"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary={"Find New Service"} />
            </ListItemButton> */}
            <ListSubheader>
              <Typography variant="subtitle2" sx={{textTransform: "uppercase"}}>
                Support
              </Typography>
            </ListSubheader>
            <ListItemButton>
                <ListItemText primary={"Request help"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary={"Documentation"} />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary={"Service Status"} />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
