import Const from '../Const';

var EventEmitter = require('events').EventEmitter;


export class TableDataStore{
  constructor(data){
    this.data = data;
    this.filteredData = null;
    this.isOnFilter = false;
    this.sortObj = {};
    this.pageObj = {};
  }

  setProps(isPagination,keyField){
    this.keyField = keyField;
    this.pagination = isPagination;
  }

  page(page, sizePerPage){
    this.pageObj.end = page*sizePerPage-1;
    this.pageObj.start = this.pageObj.end - (sizePerPage -1);
    return this;
  }

  get(){
    let _data = this.getCurrentDisplayData();
    console.log(_data);

  }

  getCurrentDisplayData(){
    if(this.isOnFilter) return this.filteredData;
    else return this.data;
  }

  getKeyField(){
    return this.keyField;
  }

  getDataNum(){
    return this.getCurrentDisplayData().length;
  }
}
