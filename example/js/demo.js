import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products =[];

function addProduct(quantity){
  var startId = products.length;
  for(var i=0;i<quantity; i++){
    var id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 100 + i
    });
  }

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

function onAfterTableComplete(){
  console.log('Table render complete');
}

var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  selected: [],
  bgColor: "rgb(238,193,213)",
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};
var cellEditProp = {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
};

var options = {
  sortName: "name", //default sort column name
  sortOrder: "desc", //default sort order
  afterTableComplete: onAfterTableComplete // A hook for after Table render complete
};

function priceFormatter(cell,row){
  return '<i class="glyphicon glyphicon-used"></i>' + cell;
}

React.render(
  <BootstrapTable data={products} striped={true} hover={true} pagination={true} selectRow={selectRowProp} cellEdit={cellEditProp}
                  insertRow={true} deleteRow={true} search={true} columnFilter={true} options={options}>
                  <TableHeaderColumn dataField="id" dataAlign="center" dataSort={true} iskey={true}>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField="name" dataSort={true}> Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField="price" dataFormat={priceFormatter} editable={false}>Product Price</TableHeaderColumn>
  </BootstrapTable>,document.getElementById("basic")
);

BootstrapTable.staticmethod();
BootstrapTable.setSelectRow();
