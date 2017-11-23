// dom_util
// Load Css: 
require('./base.css'); 

// export default
let util = {}; 
export default util; 

/**
 * Create A <div> In <body> And Return It
 */
util.createRoot = function(){
	let body = document.getElementsByTagName('body')[0]; 
	let $popup = document.createElement('div');
	
	body.appendChild($popup);

	return $popup; 
}
