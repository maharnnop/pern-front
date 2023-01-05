import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashbord = (props) => {
  const [summary, setSummary] = useState({
    sum: [],
    sumAll: 0,
  });
  useEffect(() => {
    const fillDate = props.data.map((item) => {
      item.createdAt = item.createdAt.slice(0, 10);
      return item;
    });
    const date = [...new Set(fillDate.map((item) => item.createdAt))];
    const sum = [];
    let sumAll = 0;
    for (const item of date) {
      let income = 0;
      let outcome = 0;
      for (let i = 0; i < fillDate.length; i++) {
        if (fillDate[i].createdAt === item) {
          if (fillDate[i].type) {
            income += fillDate[i].amount;
          } else {
            outcome += fillDate[i].amount;
          }
        }
        if (i === fillDate.length - 1) {
          sum.push({
            createdAt: item,
            income: income,
            outcome: outcome,
            summary: income - outcome,
          });
          sumAll = sumAll + income - outcome;
        }
      }
    }
    setSummary({ sum: sum, sumAll: sumAll });
  }, []);

  const allList = summary.sum.map((item, id) => {
    return (
      <tr key={id}>
        <td>
          <h4>{`${item.createdAt.slice(8, 10)}/${item.createdAt.slice(
            5,
            7
          )}/${item.createdAt.slice(0, 4)}`}</h4>
        </td>
        <td>
          <h4>{item.income}</h4>
        </td>
        <td>
          <h4>{item.outcome}</h4>
        </td>
        <td>
          <h4>{item.summary}</h4>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>DD/MM/YY</th>
            <th>income</th>
            <th>outcome</th>
            <th>summary</th>
          </tr>
        </thead>
        <tbody>
          {allList}
          <tr key="summary">
            <td>
              <h4>SUMMARY ALL</h4>
            </td>
            <td></td>
            <td></td>
            <td>
              <h4>{summary.sumAll}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashbord;
