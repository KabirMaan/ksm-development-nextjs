import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
      height: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    bottom: 0,
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

const Footer = ({ setSelectedIndex, setTabValue }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/"
                onClick={() => setTabValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/services"
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(2);
                }}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/websites"
                onClick={() => {
                  setTabValue(1);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => setTabValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => setTabValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => setTabValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => setTabValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => setTabValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => setTabValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => setTabValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/contact"
                onClick={() => setTabValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <svg
        className={classes.adornment}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 294.4 180"
      >
        <style>{`.st1{fill:#fff}.st2{font-family:&apos;ArialMT&apos;}.st3{font-size:8px}`}</style>
        <path d="M294.4 0L166.3 227H-4V0z" />
        <path fill="none" d="M111-24v376" />
        <text transform="translate(5 175)" className="st1 st2 st3">
          © KSM Development 2020
        </text>
        <text transform="translate(147.442 175)" className="st1 st2 st3">
          London, UK
        </text>
      </svg>
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
        style={{ margin: 0 }}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/facebook.svg"
            alt="facebook logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/twitter.svg"
            alt="twitter logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram logo"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
