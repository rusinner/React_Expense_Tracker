import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import PubSub from "pubsub-js";

import Details from "./components/Details/Details";
import Main from "./components/Details/Main/Main";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);
  // on mobile when tap the microphone
  // scroll into main view
  const executeScroll = () => main.current.scrollIntoView();
  useEffect(() => {
    // here i want to find how the SpeechState.Recording works
    if (speechState === SpeechState) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={4} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
