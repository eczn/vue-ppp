// VuePPP 
import PopupLayout from './PopupLayout'; 
import PopupController from './PopupController'; 
import dom_util from './dom_util'; 
import routerListen from './routerListen'; 

/**
 * export default
 */
let PPP = {
    $ppp: null
}
export default PPP; 

/**
 * @description    Pre Process Before `PopupLayout` Creating 
 * @param {*}        Vue 
 * @param { router } option 
 */
function preInit(Vue, option){

}

/**
 * Vue Plugin Entry: 
 * `.install` Function For `Vue.use` 
 */
PPP.install = function(Vue, option){
    /**
     * Pre Process 
     */
    preInit(Vue, option); 

    /**
     * Get Router From Option 
     */
    let { router } = option; 

    /**
     * Create PPP's Root Dom To <body /> 
     * And Add It To PopupLayout As `el` Field
     */
    let $dom_root_ppp = dom_util.createRoot(); 
    PopupLayout.el = $dom_root_ppp; 

    /**
     * Init PopupLayout.vue To $ppp 
     * Register It To `Vue.prototype` And `PPP` Itself
     */
    let $ppp = new Vue(PopupLayout); 
    Vue.prototype.$ppp = $ppp; 
    PPP.$ppp = $ppp; 

    /**
     * Close The Top Of Modals When Routing
     */
    routerListen($ppp, router); 
}
