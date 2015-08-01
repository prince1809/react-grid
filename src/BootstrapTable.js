import React from 'react';


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
