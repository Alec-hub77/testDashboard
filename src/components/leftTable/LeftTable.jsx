import React from "react";
import "./leftTable.scss";
import Table from "../table/Table.jsx";

const LeftTable = () => {
  return (
    <div className="leftSideContainer">
      <div className="leftContainer">
        <div className="inputFilters">
          <div className="filter">
            <span>Buy advice axchange</span>
            <input type="text" />
          </div>
          <div className="filter">
            <span>Buy advice currency</span>
            <input type="text" />
          </div>
          <div className="filter">
            <span>Buy advice currency</span>
            <input type="text" />
          </div>
          <div className="filter">
            <span>Sell advice currency</span>
            <input type="text" />
          </div>
        </div>
        <div className="clearContainer">
          <div className="clear">Clear filters</div>
          <button>Filter arbitrage</button>
        </div>
      </div>
      <Table/>
    </div>
  );
};

export default LeftTable;
