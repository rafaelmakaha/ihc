import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Auth from '../Authentication/Auth';
import avatar from '../Assets/avatar.svg';
// import search from '../Assets/search.svg';
import Search from '@material-ui/icons/Search';

import MenuBebedouros from './MenuBebedouros';

import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  IconButton,
  Hidden,
  Divider,
  Button,
  withStyles,
  Avatar,
  Grid,
  Input
} from '@material-ui/core';
import MenuFiltros from './MenuFiltros';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: '#6700EE',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#212020',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  logo: {
    fontSize: 18,
  },
  logout: {
    display: 'right',
  },
});

class ResponsiveDrawer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false,
      logged: Auth.logged(),
      openFiltros: false,
      openBebedouros: false
    };
    Auth.handleLoginAuth = this.handleLogin;
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleLogout = () => {
    Auth.logout();
    this.setState({logged: Auth.logged()});
    console.log("logout chamado");
    console.log("novo valor de logged: " + this.state.logged);
    window.location.reload();
  };

  handleLogin = () => {
    Auth.login();
    this.setState({logged: 'true'});
    console.log("login chamado");
    console.log("novo valor de logged: " + this.state.logged);

  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
//========================================================
  // handleClose = () => {
  //   this.setState({ open: false });
  // };
  handleToggleFiltros = () => {
    this.setState(state => ({ openFiltros: !state.openFiltros }));
  };

  handleToggleBebedouros = () => {
    this.setState(state => ({ openBebedouros: !state.openBebedouros }));
  };

  handleCloseFiltros = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({
      openFiltros: false,
    });
  };

  handleCloseBebedouros = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({
      openBebedouros: false,
    });
  };


  // handleOpen = () => {
  //   this.setState({
  //     openFiltros: true,
  //     // openBebedouros: true
  //   });
  // };

  render() {
    const { classes, theme } = this.props;
    const mui_theme = createMuiTheme ({
        overrides: {
            MuiFormLabel: {
              root: {
                  color: 'red',
              },
              disabled: {
                  '&$disabled': {color: 'black'},
              },
            },
            MuiButton: {
              root: {
                color: '#E1E7E4',
              },
            },
            MuiDivider: {
              root: {
                backgroundColor: '#E1E7E4',
              }
            }
        }
    })

    var drawer;

    if (this.state.logged === 'false'){
      console.log("primeiro caso: " + this.state.logged);
      drawer = (
        <div>
          <div className={classes.toolbar} />
          <MuiThemeProvider theme={mui_theme}>
            <Divider />
            <List>
              <Button fullWidth size="small" component={Link} to='/login'>Entrar/Cadastrar</Button>
            </List>
            <List>
              <Button fullWidth size="small" component={Link} to='/cart'>Carrinho</Button>
            </List>
            <Divider />
            <List>
              <Button fullWidth size="small" component={Link} to="/about">Sobre</Button>
            </List>
            <List>
              <Button fullWidth size="small" component={Link} to="/help">Ajuda</Button>
            </List>
            <Divider/>
          </MuiThemeProvider>
        </div>
      )
    }else{
      console.log('segundo caso = ',Auth.logged());
      drawer = (
        <div>
          <div className={classes.toolbar} />
          <MuiThemeProvider theme={mui_theme}>
            <Button fullWidth component={Link} to='/profile'>
              <Avatar src={avatar} />
            </Button>
            <Divider />
            <List>
              <Button fullWidth size="small" component={Link} to='/profile'>Perfil</Button>
            </List>
            <List>
              <Button fullWidth size="small" onClick={this.handleLogout} component={Link} to="/">Sair</Button>
            </List>
            <Divider />
            <Divider />
            <List>
              <Button fullWidth size="small" component={Link} to='/cart'>Carrinho</Button>
            </List>
            <List>
              <Button fullWidth size="small" component={Link} to='/my_purchases'>Minhas Compras</Button>
            </List>
            <Divider />
            <List>
              <Button fullWidth size="small" component={Link} to='/announce'>Anunciar</Button>
            </List>
            <List>
              <Button fullWidth size="small" component={Link} to='/my_announces'>Meus Anúncios</Button>
            </List>
            <Divider />
            <List>
              <Button fullWidth size="small" component={Link} to="/about">Sobre</Button>
            </List>
            <List>
              <Button fullWidth size="small" component={Link} to="/help">Ajuda</Button>
            </List>
            <Divider/>
          </MuiThemeProvider>
        </div>
      )
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
            <MenuIcon />
            </IconButton>
            <MuiThemeProvider theme={mui_theme}>
              <Grid container > {/* justify="space-between" */}
                <Button className={classes.logo} color="inherit" component={Link} to="/">FGAqua</Button>

                <MenuFiltros />
                <MenuBebedouros />

              </Grid>

              <Input placeholder="Busca" />
              <IconButton color="inherit" component={Link} to="/busca">
                <Search />
              </IconButton>
            </MuiThemeProvider>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
              {this.verifica_login}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} /> {/*N faz nada*/}
          {this.props.children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
