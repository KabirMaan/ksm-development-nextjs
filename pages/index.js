import React from "react";
import ReactGA from "react-ga";
import Head from "next/head";
import Lottie from "react-lottie";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  CardContent,
  Card,
} from "@material-ui/core";

import animationData from "../src/animations/landinganimation/data";
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: ".9rem",
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0em",
    },
  },
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
    marginTop: "12em",
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
  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: "0em",
      paddingRight: "0em",
      borderRadius: 0,
    },
  },
  infoBackground: {
    position: "absolute",
    zIndex: -1,
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const LandingPage = ({ setTabValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps and Websites | KSM Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Expert Software Development | KSM Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="ksmdevelopment.com" />
        <link rel="canonical" key="canonical" href="ksmdevelopment.com" />
      </Head>
      {/*-----Hero Block-----*/}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h1">
              Expert Software Development
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  component={Link}
                  href="/estimate"
                  onClick={() => {
                    setTabValue(5);
                    ReactGA.event({
                      category: "Estimate",
                      action: "Home Page Pressed",
                    });
                  }}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnButtonHero}
                  component={Link}
                  href="/revolution"
                  onClick={() => setTabValue(2)}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.animation} item sm>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
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
            <LazyLoadImage
              alt="custom software icon"
              src="/assets/customSoftware.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*-----iOS/Android Block------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid item style={{}} className={classes.servicesRight}>
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
            <LazyLoadImage
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
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
          justify={matchesSM ? "center" : "flex-start"}
        >
          <Grid item style={{}} className={classes.servicesLeft}>
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
          <Grid item>
            <LazyLoadImage
              alt="website  icon"
              src="/assets/websiteIcon.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Revolution Block------*/}
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
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
            </CardContent>
          </Card>
          <LazyLoadComponent threshold={850}>
            <div className={classes.revolutionBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Information Block------*/}
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ height: "77em" }}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                container
                direction="column"
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
              >
                <Typography variant="h1" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Lets get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    style={{ color: "white", borderColor: "white" }}
                    component={Link}
                    href="/about"
                    onClick={() => {
                      setTabValue(3);
                    }}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h1" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say Hello!{" "}
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    style={{ color: "white", borderColor: "white" }}
                    component={Link}
                    href="/contact"
                    onClick={() => {
                      setTabValue(4);
                    }}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <LazyLoadComponent threshold={700}>
            <div className={classes.infoBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      <Grid item>
        <LazyLoadComponent threshold={700}>
          {/*-----Call To Action------*/}
          <CallToAction setTabValue={setTabValue} />
        </LazyLoadComponent>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
