function getElm(id){
  return document.getElementById(id);
}

function readValue(id){
  return getElm(id).value;
}

function updateHtml(text,id){
  getElm(id).innerHTML  = text;
}


function convertCToF(c) {
  var f = c * (9 / 5) + 32;
  return f;
}

function convertFToC(f) {
  var c = (f - 32) * 5 / 9;
  return c;
}

function sequnce(){
  var val =  readValue(activeId);
  var convertedVal = activeFn(val);
  updateHtml("Result: "+ convertedVal + activeSuffix,'result')
}

var activeFn = convertCToF;
var activeId = 'cInput';
var activeSuffix = "℉"

getElm('cInput').onfocus = function(){
  activeFn = convertCToF;
  activeId = 'cInput';
  activeSuffix = "℉"
}

getElm('fInput').onfocus  = function(){
  activeFn = convertCToF;
  activeId = 'fInput';
  activeSuffix = "℃"
}

getElm("cInput").oninput = sequnce;
getElm("fInput").oninput = sequnce;
getElm("submit").oninput = sequnce;
