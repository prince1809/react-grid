import React from 'react';
import classSet from 'classnames';
import Const from './Const';

class selectRowHeaderColumn extends React.Component{

  render(){
    var thStyle = {
      width: 35
    };

    return(
      <th style={thStyle}>
      <div className="th-inner table-header-column">
      {this.props.children}
      </div>
      </th>
    )
  }

}

export default SelectRowHeaderColumn;
