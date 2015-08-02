import React from 'react';
import classSet from 'classnames';
import Const from './Const';
import Header from './Header';
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
      if(this.props.cellEdit.mode !== Const.CELL_EDIT_NODE){
        this.props.selectRow.clickState = false;
      }
    }
  }
}

export default BootstrapTable;
