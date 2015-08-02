import React from 'react';
import classSet from 'classnames';
import Const from './Const';

class TableHeaderColumn extends React.Component{
  order : Const.SORT_DESC

  handleColumnClick(e){
    if(!this.props.dataSort) return;
    var dom = this.refs.innerDiv.getDOMNode();
    this.order = this.order == Const.SORT_DESC ? Const.SORT_ASC: Const.SORT_DESC;
    this.props.clearSortCaret(this.order,this.props.dataField);
    dom.appendChild(Util.renderSortCaret(this.order));
  }
  render(){
    var thStyle = {
      textAlign: this.props.dataAlign,
      display: this.props.hidden? "none" : null
    };

    var classes = classSet(this.props.dataSort? "sort-column":"");

    return(
      <th>
        <div ref="innerDiv" className="th-inner table-header-column"
          onClick={this.handleColumnClick.bind(this)}>{this.props.children}</div>
      </th>
    )
  }
};

export default TableHeaderColumn;
