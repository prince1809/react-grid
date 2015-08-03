import React from 'react';
import Const from './Const';
import Util from './Util';
import classSet from 'classnames';
import selectRowHeaderColumn from './SelectRowHeaderColumn';

class Header extends React.Component{
  constructor(props){
    super(props);
    this._attachClearSortCaretFunc();
  }
}
