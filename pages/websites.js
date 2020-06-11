import React from "react";
import Head from "next/head";
import {
  Grid,
  useMediaQuery,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Link from "../src/Link";
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const Websites = ({ setSelectedIndex, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Stunning Custom Website Design | KSM Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          content="Expert Software Development | Websites"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="maansoftware.com/websites"
        />
        <link
          rel="canonical"
          key="canonical"
          href="maansoftware.com/websites"
        />
      </Head>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction="row"
        justify={matchesMD ? "center" : undefined}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to iOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? "center" : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to Services Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                alt="graph with magnifying glass"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="world outline made from dollar signs"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/outreach.svg" alt="Megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Search Engine <br /> Optimisation
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/seo.svg" alt="website on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            If you’re like us, probably never.
          </Typography>{" "}
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>{" "}
      <Grid item>
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
