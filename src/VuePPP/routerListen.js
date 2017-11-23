// routerListen.js
export default function($ppp, router){
	if (!router) return console.warn('[ vue-ppp ] Router Not Found When Trying To Listen Routing'); 

	/**
	 * `timer` 
	 */
    let timer = null; 
	
	/**
	 * @description Routing Event Handle 
	 * @param {*} to 
	 * @param {*} from 
	 * @param {*} next 
	 */
	function routerListen(to, from, next){
		clearTimeout(timer);
		let lastOne = $ppp.getLastActive(); 
	
		if (lastOne){
			console.log('[ PPP onRouting ]', 'next(false)'); 
			lastOne.close(); 
			next && next(false); 
		} else {
			console.log('[ PPP onRouting ]', 'next()'); 
			next && next(); 
		}
	}

	/**
	 * Listen Routing With beforeEach
	 */
    router.beforeEach((to, from, next) => {
        clearTimeout(timer);
        timer = setTimeout(function(){
            routerListen(to, from, next); 
        });
	});
	
	return 'ok'; 
}