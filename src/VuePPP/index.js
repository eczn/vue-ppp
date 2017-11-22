// VuePPP
import PopupLayout from './PopupLayout'; 
import PopupController from './PopupController'; 
import dom_util from './dom_util'; 

// export default
let PPP = {}; 
// Counter; 
let COUNT = 0; 

// For Init 
function popupInit(Vue, option){

}

PPP.install = function(Vue, option){
    let $dom_root_ppp = dom_util.createRoot(); 
    PopupLayout.el = $dom_root_ppp; 


    let $ppp = new Vue(PopupLayout); 
    Vue.prototype.$ppp = $ppp; 
}

export default PPP; 
