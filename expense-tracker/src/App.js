import { Grid } from "@material-ui/core";
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
        <Grid item xs={12} sm={4} className={classes.main}>
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
