import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
// import { useSpeechContext } from '@speechly/react-client';
import { ExpenseTrackerContext } from '../../context/context';
// import useStyles from './styles';
import "./styles.css";
import DetailsCard from '../Details/Details';


import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';
// import { Details } from '@material-ui/icons';

const ExpenseTracker = () => {
  // const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  const [showChart, setShowChart] = React.useState(false);
  const onClick = () => {
    if(!showChart) setShowChart(true)
    if(showChart) setShowChart(false)

  }

  return (
    <div>
    {/* <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Arranged by Sparklin" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card> */}
    
    <div className="list-chart-wrap">
    <div className="title-tile">Expense Tracker</div>
    {/* <div>Arranged by Sparklin</div> */}
    <div className="main-cardcontent">
      <h2 className="balance-info">Total Balance ₹{balance}</h2>
      {/* <h4 style={{ lineHeight: '1.5em', marginTop: '20px' }}></h4> */}
      {/* <InfoCard /> */}
    {/* <hr/> */}
      <Form />

    </div>
    { showChart ? 
    <div className="list-of-tracking-items">
      <div className="heading">All Transactions</div>
    <List />
</div>
    : 
    <div className="doughnut-window">
    <DetailsCard title="Combined" subheader="Data" />
    </div>
   }
    
    { showChart ? 
     <button className="toggle-button" onClick={onClick}><svg width="20" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM10 3.5L1 3.5V4.5L10 4.5V3.5Z" fill="white"/>
     </svg>
      GO to home</button>
    : 
      <button className="toggle-button" onClick={onClick}>VIEW EXPENSE DETAILS <svg width="20" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="white"/>
      </svg></button>
   }
       
        
    </div>



    </div>
  );
};

export default ExpenseTracker;
