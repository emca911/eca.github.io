function getElm(id){
  return document.getElementById(id);
}

function readValue(id){
  return getElm(id).value;
}

function updateHtml(text,id){
  getElm(id).innerHTML  = text;
}


function convertKToF(k) {
  var f = 1.8 * (k - 273) + 322;
  return f;
}

function convertFToK(f) {
  var k = (f + 459.67) * 5 / 9;
  return k;
}

function sequnce(){
  var val =  readValue(activeId);
  var convertedVal = activeFn(val);
  updateHtml("Result: "+ convertedVal + activeSuffix,'result')
}

var activeFn = convertKToF;
var activeId = 'kInput';
var activeSuffix = "℉"

getElm('cInput').onfocus = function(){
  activeFn = convertKToF;
  activeId = 'kInput';
  activeSuffix = "℉"
}

getElm('fInput').onfocus  = function(){
  activeFn = convertKToF;
  activeId = 'fInput';
  activeSuffix = "K"
}

getElm("kInput").oninput = sequnce;
getElm("fInput").oninput = sequnce;
getElm("submit").oninput = sequnce;
