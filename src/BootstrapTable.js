import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';
import PaginationList from './pagination/PaginationList';
import ToolBar from './toolbar/ToolBar';
import TableFilter from './TableFilter';
import {TableDataStore} from './store/TableDataStore';


class BootstrapTable extends React.Component{

  constructor(props){
    super(props);

    if(this.props.cellEdit){
      this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
      if(this.props.cellEdit.mode !== Const.CELL_EDIT_NODE)
        this.props.selectRow.clickState = false;
      }

      this.sortTable = false;
      this.order = Const.SORT_DESC;
      this.sortField = null;
      let keyField = null;
      this.props.children.forEach(function(column){
        if(column.props.dataSort) this.sortTable = true;
        if(column.props.iskey){
          if(keyField != null)
          throw "Error. Multiple key column be detached in TableHeaderColumn";
          keyField = column.props.dataField;
        }
      }, this);

      if(keyField == null)
        throw "Error. No any key column defined in TableHeaderColumn. Use 'iskey={true}' to specify an unique column after version 0.0.0";

     if(!Array.isArray(this.props.data)){
       this.store = new TableDataStore(this.props.data.getData());
       this.props.data.clear();
       this.props.data.on('change', (data) => {
         this.store.setData(data);
         this.setState({
           data: this.getTableData()
         })
       }.bind(this));
     }else{

       this.store = new TableDataStore(this.props.data);
     }

     this.store.setProps(this.props.pagination,keyField);
     this.state = {
       data: this.getTableData()
     };
  }

  getTableData(){
    let result = [];
    if(this.props.pagination){
      result = this.store.page(1,Const.SIZE_PER_PAGE).get();
    }else {
      result = this.store.get();
    }

    return result;
  }

  ComponentDidMount(){

  }

  componentWillUnmount(){

  }

  componentDidUpdate(){

  }

  handleSort(order,sortField){

  }

  handlePaginationData(page,sizePerPage){

  }

  handleSelectAllRow(e){

  }

  handleEditCell(newVal,rowIndex,colIndex){

  }

  handleAddRow(newObj){

  }

  handleDropRow(){

  }

  handleFilterData(filterObj){

  }

  handleSearch(searchText){

  }

  _adjustHeaderWidth(){

  }

  renderPagination(){

  }

  renderToolBaar(){

  }

  renderTableFilter(column){

  }

  render(){
    var tableClass = classSet("react-bs-table");
    var style = {
      height: this.props.height
    };
    var columns = this.props.children.map(function(column,i){
      return{
        name: column.props.dataField,
        align: column.props.dataAlign,
        sort: column.props.dataSort,
        format: column.props.dataFormat,
        editable: column.props.editable,
        hidden: column.props.hidden,
        className: column.props.className,
        index: i
      };
    },this);

    var pagination = this.renderPagination();
    var toolBar = this.renderToolBaar();
    var TableFilter = this.renderTableFilter(columns);
    return(
      <div className="react-bs-container">
        {toolBar}
        <div ref="table" style={style} className={tableClass}>
          <TableHeaders rowSelectType={this.props.selectRow.mode}
                       sortName={this.props.options.sortName}
                       sortOrder={this.props.options.sortOrder}
                       onSort={this.handleSort.bind(this)}
                       onSelectAllRow={this.handleSelectAllRow.bind(this)}>
            {this.props.children}
          </TableHeaders>
          <TableBody ref="body" data={this.state.date} columns={columns}
                                striped ={this.props.striped}
                                hover={this.props.hover}
                                keyField={this.store.getKeyField()}
                                condensed={this.props.condensed}
                                selectRow={this.props.selectRow}
                                cellEdit={this.props.cellEdit} />
                              {TableFilter}
        </div>
        {pagination}
      </div>
    )
  }

}

BootstrapTable.propTypes = {

  height: React.PropTypes.string,
  data: React.PropTypes.array,
  striped: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool,
  pagination: React.PropTypes.bool,
  selectRow: React.PropTypes.shape({
    mode: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    selected: React.PropTypes.array,
    onSelect: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    clickToSelect: React.PropTypes.bool
  }),
  cellEdit: React.PropTypes.shape({
    mode: React.PropTypes.string,
    blurToSave: React.PropTypes.bool,
    afterSaveCell: React.PropTypes.func
  }),
  insertRow: React.PropTypes.bool,
  deleteRow: React.PropTypes.bool,
  search: React.PropTypes.bool,
  columnFilter: React.PropTypes.bool,
  options: React.PropTypes.shape({
    sortName: React.PropTypes.string,
    sortOrder: React.PropTypes.string,
    afterTableComplete: React.PropTypes.func
  })
};

BootstrapTable.defaultProps = {

  height: "100%",
  striped: false,
  hover: false,
  condensed: false,
  pagination: false,
  selectRow: {
    mode: Const.ROW_SELECT_NONE,
    bgColor: Const.ROW_SELECT_BG_COLOR,
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false
  },
  cellEdit: {
    mode: Const.CELL_EDIT_NODE,
    blurToSave: false,
    afterTableComplete: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  columnFilter: false,
  options: {
    sortName: null,
    sortOrder: Const.SORT_DESC
  }
};

export default BootstrapTable;
