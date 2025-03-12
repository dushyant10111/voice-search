import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import "./styles.css"
import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData, totalIncome, totalExpense } = useTransactions(title);
  const classes = useStyles();

  return (
    <div className="doughnut-info">
    <canvas id="chart" width="256" height="256"></canvas>
        <div className="info-wrap">
        <div className="total-income white-capital-font">
          Total Income
        <div className="white-thin-font">₹{totalIncome}</div> 
        </div>
        
        <div className="total-expense white-capital-font">
          Total expense
          <div className="white-thin-font">₹{totalExpense}</div> 
        </div>
        <div className="balance white-capital-font">
          Total left amount
          <div className="white-thin-font">₹{total}</div> 
          </div>
        </div>
        </div>
  );
};

export default DetailsCard;

