import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Auth from '../Authentication/Auth';
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
} from '@material-ui/core';


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
  overrides: {
    Button: {
      raisedPrimary: {
        color: 'white',
      }
    }    
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

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
        }
    })


    var drawer;
    if (Auth.logged()){
      drawer = (
        <div>
          <div className={classes.toolbar} />
          <Divider light={true} />
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to='/login'>Entrar/Cadastrar</Button>
          </List>
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to='/cart'>Carrinho</Button>
          </List>
          <Divider light={true} />
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to="/about">Sobre</Button>
          </List>
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to="/help">Ajuda</Button> 
          </List>
          <Divider light={true}/>
        </div>
      )
    }else{
      drawer = (
        <div>
          <div className={classes.toolbar} >
            <Avatar src="../../img/filtro_barro.jpg" />
          </div>
          <Divider light={true} />
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to='/login'>Perfil</Button>
          </List>
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to='/cart'>Carrinho</Button>
          </List>
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to='/my_purchases'>Minhas Compras</Button>
          </List>
          <Divider light={true} />
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to='/announce'>Anunciar</Button>
          </List>
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to='/my_announces'>Meus Anúncios</Button>
          </List>
          <Divider light={true} />
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to="/about">Sobre</Button>
          </List>
          <List>
            <Button className={classes.overrides} fullWidth size="small" color="secondary" component={Link} to="/help">Ajuda</Button> 
          </List>
          <Divider light={true}/>
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
              <Grid container justify="space-between" >
                <Button className={classes.logo} color="inherit" noWrap component={Link} to="/">FGAqua</Button>
                <Button className={classes.logout} color="inherit" noWrap component={Link} to="/logout">Logout</Button>
              </Grid>  
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
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
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