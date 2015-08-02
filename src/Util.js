import Const from './Const';
export default {
  renderSortCaret(order){
    var wrap = document.createElement("span");
    wrap.className = "order";
    if(order == Const.SORT_ASC) wrap.className += "dropup";
  }
}
