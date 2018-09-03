import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";

import HomePage from "./pages/HomePage";

import TbMenuItem from "./components/TbMenuItem";
import TbParentMenuItem from "./components/TbParentMenuItem";

import menu from "./menu";

class App extends React.Component {
  state = {
    showDrawer: false
  };

  handleDrawerOpen = () => {
    this.setState({ showDrawer: true });
  };

  handleDrawerClose = () => {
    this.setState({ showDrawer: false });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.showDrawer && classes.appBarShift
            )}
          >
            <Toolbar disableGutters={!this.state.showDrawer}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.showDrawer && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                <Link exact to="/" className={classes.title}>
                  {" "}
                  Truck Board
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.showDrawer && classes.drawerPaperClose
              )
            }}
            showDrawer={this.state.showDrawer}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <div className={classes.roots}>
              <div className={classes.bar}>
                <div className={classes.search}>
                  <SearchIcon />
                </div>
                <TextField
                  id="search"
                  label="Search field"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                />
              </div>
              <List>
                {menu.map(item => {
                  if (item.submenu) {
                    return (
                      <TbParentMenuItem
                        submenu={item.submenu}
                        name={item.name}
                        link={item.link}
                        icon={item.icon}
                        className={classes.href}
                      />
                    );
                  } else {
                    return (
                      <TbMenuItem
                        name={item.name}
                        link={item.link}
                        icon={item.icon}
                        className={classes.href}
                      />
                    );
                  }
                }, this)}
              </List>
            </div>
          </Drawer>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/" component={HomePage} />
            {menu.map(item => {
              if (item.submenu) {
                return item.submenu.map(submenuItem => (
                  <Route
                    exact
                    path={submenuItem.link}
                    component={submenuItem.component}
                  />
                ));
              } else {
                return (
                  <Route exact path={item.link} component={item.component} />
                );
              }
            })}
          </main>
        </div>
      </Router>
    );
  }
}
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  href: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.61)"
  },
  roots: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  bar: {
    marginLeft: "30px",
    marginTop: "-102px"
  },
  title: {
    textDecoration: "none",
    color: "#fff"
  },
  search: {
    marginLeft: "2px"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "unset",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
