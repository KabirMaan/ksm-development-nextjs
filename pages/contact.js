import React, { useState } from "react";
import ReactGA from "react-ga";
import Head from "next/head";
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import axios from "axios";
import Link from "../src/Link";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
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
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    marginTop: "5em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const Contact = ({ setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = async () => {
    setLoading(true);
    ReactGA.event({
      category: "Message",
      action: "Contact Us Page Send Message Button Pressed",
    });
    try {
      const response = await axios.get(
        "https://us-central1-ksm-development.cloudfunctions.net/sendMail",
        {
          params: {
            name,
            email,
            phone,
            message,
          },
        }
      );
      console.log(response);
      setLoading(false);
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAlert({
        open: true,
        message: "Message sent successfully!",
        backgroundColor: "#4BB543",
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      setAlert({
        open: true,
        message: "Something went wrong, please try again!",
        backgroundColor: "#FF3232",
      });
    }
  };

  const buttonContents = (
    <>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | Maan Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Expert Software Development | Contact Us"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="maansoftware.com/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://maansoftware.com/contact.js"
        />
      </Head>

      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h1"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone"
                  style={{ marginRight: ".5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="email"
                  style={{ marginRight: ".5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:info@kabirmaan.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    info@kabirmaan.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: ".5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: ".5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  helperText={emailHelper}
                  error={!!emailHelper}
                  value={email}
                  fullWidth
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: ".5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  helperText={phoneHelper}
                  error={!!phoneHelper}
                  value={phone}
                  fullWidth
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField
                value={message}
                id="message"
                fullWidth
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                className={classes.sendButton}
                disabled={
                  !name ||
                  !!emailHelper ||
                  !!phoneHelper ||
                  !message ||
                  !email ||
                  !phone
                }
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesSM}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
        style={{ zIndex: 1302 }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: ".5em" }}>
              <TextField
                label="Name"
                id="name"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: ".5em" }}>
              <TextField
                label="Email"
                id="email"
                helperText={emailHelper}
                error={!!emailHelper}
                value={email}
                fullWidth
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: ".5em" }}>
              <TextField
                label="Phone"
                id="phone"
                helperText={phoneHelper}
                error={!!phoneHelper}
                value={phone}
                fullWidth
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              value={message}
              id="message"
              fullWidth
              className={classes.message}
              InputProps={{ disableUnderline: true }}
              multiline
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
          >
            <Grid item>
              <Button
                color="primary"
                onClick={() => setOpen(false)}
                style={{ fontWeight: 300 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendButton}
                disabled={
                  !name ||
                  !!emailHelper ||
                  !!phoneHelper ||
                  !message ||
                  !email ||
                  !phone
                }
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid
        item
        container
        className={classes.background}
        direction={matchesMD ? "column" : "row"}
        lg={8}
        xl={9}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? "0em" : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h1" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                align={matchesMD ? "center" : undefined}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid item container justify={matchesMD ? "center" : undefined}>
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
              ReactGA.event({
                category: "Estimate",
                action: "Contact Page Pressed",
              });
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
