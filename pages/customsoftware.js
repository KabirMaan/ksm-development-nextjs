import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  IconButton,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import CallToAction from "../src/ui/CallToAction";
import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uxAnimation from "../src/animations/uxAnimation/data";

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
  itemContainer: {
    maxWidth: "40em",
  },
}));

const CustomSoftware = ({ setSelectedIndex, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Expert Software Develoment| Custom Software Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="maansoftware.com/customsoftware"
        />
        <link
          rel="canonical"
          key="canonical"
          href="maansoftware.com/customsoftware"
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
              href="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img src="/assets/backArrow.svg" alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? "center" : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              vairent="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Whether we're replacing old software or inventing new solutions,
              KSM Development is here to help your business tackle technology.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Our custom solutions are designed from the ground up with your
              needs, wants and goals at the core. This collaborative process
              produces finely tuned software that is much more effective
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to iOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Reduce Errors, Reduce Waste, Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, minHeight: 250, maxWidth: 275 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                Whether you're a large brand, just getting started' or taking
                off right' our application architecture ensures pain-fre growth
                and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src="/assets/root.svg"
              alt="tree"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-between"
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginBottom: "20em" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>{" "}
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>{" "}
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction
          setSelectedIndex={setSelectedIndex}
          setTabValue={setTabValue}
        />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
