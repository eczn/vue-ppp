// dom_util
// Load Css: 
require('./base.css'); 

let util = {}; 

util.createRoot = function(){
	let body = document.getElementsByTagName('body')[0]; 
	let $popup = document.createElement('div');
	
	body.appendChild($popup);

	return $popup; 
}

export default util; 
