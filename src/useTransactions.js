import { useContext, useEffect, useState } from 'react';
import { ExpenseTrackerContext } from './context/context';
import Chart from 'chart.js'
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';



const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);


  const IncomeTransactions = transactions.filter((t) => t.type === "Income");
  const ExpenseTransactions = transactions.filter((t) => t.type === "Expense");
  var totalIncome = 0;
  var totalExpense= 0;
  const total = IncomeTransactions.reduce((acc, currVal) => acc += currVal.amount, 0) - ExpenseTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  
 
  
  console.log({title, total})


  const [ ctx, setCtx ] = useState(null);

  let element = document.getElementById("chart");
  useEffect(() => {
    setCtx(document.getElementById("chart") && document.getElementById("chart").getContext('2d'));
    console.log(element)
  },[element])

  
  // const categories = title === 'Income' ? incomeCategories : expenseCategories;

  IncomeTransactions.forEach((t) => {
    const category1 = incomeCategories.find((c) => c.type === t.category);    
    if (category1) {
      category1.amount += t.amount;
      totalIncome = category1.amount 

    }

  });
  ExpenseTransactions.forEach((t) => {
    const category2 = expenseCategories.find((c) => c.type === t.category);
    if (category2) {
      category2.amount += t.amount;
      totalExpense = category2.amount 
    }

  });



  const filteredCategories1 = incomeCategories.filter((sc) => sc.amount > 0);
  const filteredCategories2 = expenseCategories.filter((sc) => sc.amount > 0);

  console.log(filteredCategories1)
  console.log(filteredCategories2)

  let merged = filteredCategories1.concat(filteredCategories2)
    if(ctx)
     {
      var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: merged.map((c) => c.type),
            datasets: [{
                label: 'Number of votes',
                data: merged.map((c) => c.amount),
                backgroundColor: merged.map((c) => c.color),
                borderColor: '#fff',
                borderWidth: 1,
                // hoverBorderColor: ['#96ceff', '#424348', '#91ee7c', '#f7a35b', '#8286e9'],
                hoverBorderWidth: 10
            }]
        },
        options: {
            responsive: false,
            legend: {
                display: false
            },
            tooltips: {
                displayColors: false
            }
        }
      });
     }
  // }

  
  // const chartData = { 
  //   datasets: [{
  //     data: merged.map((c) => c.amount),
  //     backgroundColor: merged.map((c) => c.color),
  //   }],
  //   labels: merged.map((c) => c.type),
  // };

  // const a = chart.data;
  
  
  return { merged, total, totalIncome, totalExpense };



};

export default useTransactions;
