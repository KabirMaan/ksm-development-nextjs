import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {
  Tabs,
  Tab,
  Button,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "../Link";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    textTransform: "none",

    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  expansion: {
    backgroundColor: theme.palette.common.blue,
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0,
    },
    "&::before": {
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  expansionSummary: {
    padding: "0 24px 0 16px",
    backgroundColor: (props) =>
      props.tabValue === 1 ? "rgba(0,0,0,0.14)" : "inherit",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
}));

const Header = ({ selectedIndex, setSelectedIndex, tabValue, setTabValue }) => {
  const classes = useStyles({ tabValue });
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const lessThanMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  // const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [previousUrl, setPreviousUrl] = useState("");

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  };
  const menuOptions = [
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (e) => handleMenuOpen(e),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];
  useEffect(() => {
    if (previousUrl !== window.location.pathname) {
      setPreviousUrl(window.location.pathname);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (tabValue !== route.activeIndex) {
            setTabValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          if (tabValue !== 5) {
            setTabValue(5);
          }
          break;
        default:
          break;
      }
    });
  }, [
    tabValue,
    menuOptions,
    selectedIndex,
    routes,
    setTabValue,
    setSelectedIndex,
  ]);

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={tabValue !== 5 && tabValue}
        onChange={handleTabChange}
        // indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={index}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        href="/estimate"
        onClick={() => {
          setTabValue(5);
          ReactGA.event({
            category: "Estimate",
            action: "Desktop Header Pressed",
          });
        }}
      >
        Free Estimate
      </Button>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
        placement="bottom-start"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top-left",
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <MenuList
                  id="menu-list-grow"
                  disablePadding
                  onKeyDown={handleListKeyDown}
                  onMouseLeave={handleMenuClose}
                  onMouseOver={() => setOpenMenu(true)}
                >
                  {menuOptions.map((option, index) => (
                    <MenuItem
                      key={index}
                      onClick={(e) => {
                        handleMenuItemClick(e, index);
                        setTabValue(1);
                        handleMenuClose();
                      }}
                      selected={
                        index === selectedIndex &&
                        tabValue === 1 &&
                        window.location.pathname !== "/services"
                      }
                      component={Link}
                      href={option.link}
                      classes={{ root: classes.menuItem }}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={(e) => {
              handleMenuItemClick(e, index);
              setTabValue(1);
              handleMenuClose();
            }}
            selected={index === selectedIndex && tabValue === 1}
            component={Link}
            href={option.link}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu> */}
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) =>
            route.name === "Services" ? (
              <ExpansionPanel
                elevation={0}
                classes={{ root: classes.expansion }}
                key={index}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  classes={{ root: classes.expansionSummary }}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    onClick={() => {
                      setOpenDrawer(false);
                      setTabValue(route.activeIndex);
                    }}
                    style={{ opacity: tabValue === 1 ? 1 : null }}
                  >
                    <Link href={route.link} color="inherit">
                      {route.name}
                    </Link>
                  </ListItemText>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  classes={{ root: classes.expansionDetails }}
                >
                  <Grid container direction="column">
                    {menuOptions.map((route, index) => {
                      return (
                        <Grid item key={index}>
                          <ListItem
                            divider
                            key={route.selectedIndex}
                            button
                            component={Link}
                            href={route.link}
                            selected={
                              selectedIndex === route.selectedIndex &&
                              tabValue === 1 &&
                              window.location.pathname !== "/services"
                            }
                            onClick={() => {
                              setOpenDrawer(false);
                              setSelectedIndex(route.selectedIndex);
                            }}
                            classes={{ selected: classes.drawerItemSelected }}
                          >
                            <ListItemText
                              className={classes.drawerItem}
                              disableTypography
                            >
                              {route.name
                                .split(" ")
                                .filter((word) => word !== "Development")
                                .join("")}
                              <br />
                              <span style={{ fontSize: "0.75rem" }}>
                                Development
                              </span>
                            </ListItemText>
                          </ListItem>
                        </Grid>
                      );
                    })}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ) : (
              <ListItem
                divider
                key={route.activeIndex}
                button
                component={Link}
                href={route.link}
                selected={tabValue === route.activeIndex}
                onClick={() => {
                  setOpenDrawer(false);
                  setTabValue(route.activeIndex);
                }}
              >
                <ListItemText
                  className={
                    tabValue === route.activeIndex
                      ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                      : classes.drawerItem
                  }
                  disableTypography
                >
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setTabValue(5);
              ReactGA.event({
                category: "Estimate",
                action: "Mobile Header Pressed",
              });
            }}
            divider
            button
            component={Link}
            href="/estimate"
            className={classes.drawerItemEstimate}
            selected={tabValue === 5}
          >
            <ListItemText
              className={
                tabValue === 5
                  ? `${classes.drawerItemSelected} ${classes.drawerItem}`
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => setTabValue(0)}
              disableRipple
            >
              <svg
                className={classes.logo}
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight:300}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(230 65.233)"
                  className="st1 st2"
                  fontSize="57"
                >
                  KSM
                </text>
                <text
                  transform="translate(17.692 112.015)"
                  className="st1 st2"
                  fontSize="54"
                >
                  Development
                </text>
                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </svg>
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
            {/* {lessThanMediumScreen ? drawer : tabs} */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
