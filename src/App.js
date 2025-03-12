import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { ReactComponent as Lady } from './assets/lady.svg';
import { Details, Main } from './components';
// import useStyles from './styles';

const App = () => {
  // const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div className="wrapper-container">
      {/* <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid> */}

      <div className="main-window">

      {/* <div>
      <Details title="Income" />
      </div> */}
      <div ref={main}  >
      <Main />
      </div>

      <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>

      <Lady className="lady"/>
      </div>
      {/* <div className="doughnut-window">
      <Details title="Combined" subheader="Data" />
      </div> */}


    </div>
  );
};

export default App;
