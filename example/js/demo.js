import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products =[];

function addProduct(quantity){

}
addProduct(70);

function onRowSelect(row,isSelected){
  console.log(row);
  console.log("selected: " + isSelected);
}

function onSelectAll(isSelected){
  console.log("is select all: "+ isSelected);
}


function onAfterSaveCell(row,cellName,cellValue){
  console.log("save cell '"+cellName+"' with value '"+cellValue+"'");
  console.log("The whole row: ");
  console.log(row);
}

React.render(
  <BootstrapTable data={products} striped={true} hover={true} pagination={true}
                  insertRow={true} deleteRow={true} search={true} columns={true}>
  </BootstrapTable>,document.getElementById("basic")
);
