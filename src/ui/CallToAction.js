import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
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
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CallToAction = ({ setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      className={classes.background}
      container
      style={{ height: "60em" }}
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? "0em" : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid item container justify={matchesSM ? "center" : undefined}>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/revolution"
                onClick={() => {
                  setTabValue(2);
                }}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.estimateButton}
          component={Link}
          href="/estimate"
          onClick={() => {
            setTabValue(5);
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
