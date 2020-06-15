import React from "react";
import Head from "next/head";
import {
  makeStyles,
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

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
  missionStatement: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    fontWeight: 300,
    maxWidth: "50rem",
    lineHeight: 1.4,
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const About = ({ setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">About Us - History & Team | Maan Development</title>
        <meta
          name="description"
          key="description"
          content="We provide fast, modern, affordable, and aesthetic software design and development services. Get a free online estimate now!"
        />{" "}
        <meta
          property="og:title"
          content="Expert Software Development | About Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="maansoftware.com/about" />
        <link rel="canonical" key="canonical" href="maansoftware.com/about" />
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography variant="h1" align={matchesMD ? "center" : undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Maan Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic
          software.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>{" "}
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>{" "}
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container lg justify="center">
            <img
              src="/assets/history.svg"
              alt="quill pen sittin on top of book"
              style={{ maxHeight: matchesMD ? "200px" : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Kabir Maan, Founder
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="founder"
            src="/assets/founder.jpg"
            className={classes.avatar}
          />
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" paragraph align="center">
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <img
                src="/assets/yearbook.svg"
                alt="yearbook page about founder"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" paragraph align="center">
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src="/assets/puppy.svg"
                alt="puppy"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
};

export default About;
