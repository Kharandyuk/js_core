//T6
function input() {
  document.getElementById('input1').value =   prompt("Please enter value for the first element", "");
  document.getElementById('input2').value =   prompt("Please enter value for the second element", "");
}
function _switch() {
  let _tmp = document.getElementById('input1').value;

  document.getElementById('input1').value =   document.getElementById('input2').value;
  document.getElementById('input2').value =   _tmp;
}