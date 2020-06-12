import React from "react";
import App from "next/app";
import ReactGA from 'react-ga'
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/ui/Theme";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

ReactGA.initialize("UA-169186579-1")

export default class MyApp extends App {
  state = {
    tabValue: 0,
    selectedIndex: 0,
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  setTabValue = (index) => {
    this.setState({
      tabValue: index,
    });
  };

  setSelectedIndex = (index) => {
    this.setState(
      {
        selectedIndex: index,
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={Theme}>
          <Header
            tabValue={this.state.tabValue}
            setTabValue={this.setTabValue}
            selectedIndex={this.state.selectedIndex}
            setSelectedIndex={this.setSelectedIndex}
          />
          <Component {...pageProps} />
          <Footer
            setTabValue={this.setTabValue}
            setSelectedIndex={this.setSelectedIndex}
          />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
