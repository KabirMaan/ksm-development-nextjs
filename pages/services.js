import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Link from "../src/Link";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subTitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },

  servicesContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  servicesLeft: {
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0em",
      textAlign: "center",
    },
  },
  servicesRight: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  imageRight: {
    marginRight: "5em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0em",
      textAlign: "center",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      marginBottom: "2em",
    },
  },
}));

const Services = ({ setTabValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "5em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/*-----iOS/Android Block------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-end"}
          style={{
            marginTop: matchesSM ? "1em" : "5em",
          }}
        >
          <Grid
            item
            className={classes.servicesRight}
            style={{ width: matchesSM ? undefined : "35em" }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/mobileapps"
              onClick={() => {
                setTabValue(1);
                setSelectedIndex(2);
              }}
            >
              <span>Learn More</span>
            </Button>
          </Grid>
          <Grid item className={classes.imageRight}>
            <img
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Custom Software Block------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid item style={{}} className={classes.servicesLeft}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/customsoftware"
              onClick={() => {
                setTabValue(1);
                setSelectedIndex(1);
              }}
            >
              <span>Learn More</span>
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src="/assets/customSoftware.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*-----Website Block------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-end"}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            className={classes.servicesLeft}
            style={{ width: matchesSM ? undefined : "35em" }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimised for Search Engines, built for speed.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/websites"
              onClick={() => {
                setTabValue(1);
                setSelectedIndex(3);
              }}
            >
              <span>Learn More</span>
            </Button>
          </Grid>
          <Grid item className={classes.imageRight}>
            <img
              alt="website  icon"
              src="/assets/websiteIcon.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
