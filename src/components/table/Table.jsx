import React from "react";
import './table.scss'
import Tbody from './Tbody.jsx'

const Table = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Buy exchange pair</th>
            <th>Buy price</th>
            <th>Sell exchange</th>
            <th>Sell price</th>
            <th>Trade emount</th>
            <th>Arb%(Free%)</th>
            <th>Exp.profit USD</th>
            <th>Exp.fees USD</th>
            <th>Adj.</th>
          </tr>
        </thead>
        <tbody>
            <Tbody/>
            <Tbody/>
            <Tbody/>
            <Tbody/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
