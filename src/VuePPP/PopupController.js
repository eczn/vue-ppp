// PopupController.js
import PPP from './index'; 

/**
 * export default
 */
let PopupController = {}
export default PopupController; 

/**
 * Counter For PopupItem Instance's Id
 */
let count = 0; 

function PopupItem(option){
	this.active = false; 
	this.pid = option.type + '-' + count; 

	// Default Value 
	option.von = option.von || {}; 
	option.vbind = option.vbind || {}; 

	// Inc 
	count = count + 1;

	// Option Merged To This
	Object.assign(this, option); 

	// Default `close` Event Handler 
	this.von.close = this.von.close || (() => this.close()); 
}

// <html> Root 
var $html = document.getElementsByTagName('html')[0]; 

/**
 * Activate A PopupItem 
 */
PopupItem.prototype.launch = function(){
	setTimeout(() => {
		this.active = true;	

		// Disable Background's Scrolling 
		$html.setAttribute('class', 'banScroll');	 
	});
	return this;
}

/**
 * Close A PopupItem 
 */
PopupItem.prototype.close = function(){
	setTimeout(() => {
		this.active = false;

		if (PPP.$ppp.activeCount === 0) {
			// Enable Background's Scrolling 
			$html.setAttribute('class', '');
		}
	});
	return this; 
}

/**
 * Alias Of `new PopupItem(option)`
 */
PopupController.create = function(option){
	return new PopupItem(option); 
}

/**
 * Register Property On `PopupItem.prototype`
 */
PopupController.__setPrototype = function(key, val){
	PopupItem.prototype[key] = val; 
}

