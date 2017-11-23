<template>
	<div class="popup-layout" ref="popupRoot">
		<div v-for="(item, idx) in list" :key="item.pid" 
			class="popup-item" 
			:class="item.type + '-outter'">

			<transition :name="item.transitionName || item.type">
				<component v-if="item.active"
					:is="item.component"
					v-bind="item[':'] || item.vbind"
					v-on="item['@'] || item.von"

					:class="item.type + '-component'"
				/>
			</transition>
		</div>
	</div>
</template>

<script>
import PopupController from './PopupController'; 

export default {
	name: 'popup-layout', 
	data(){
		return {
			list: []
		}
	},
	created(){
		window.vm = this; 
		console.log('hello')
	},
	computed: {
		activeCount(){
			return this.list.reduce((acc, cur) => {
				return acc + (cur.active ? 1 : 0); 
			}, 0); 
		}
	},
	methods: {
		create(config){
			let popupItem = PopupController.create(config); 
			this.list.push(popupItem); 

			return popupItem; 
		},

		getLastActive(){
			for (let i = this.list.length - 1; i >= 0; i --) {
				let item = this.list[i];
				if (item.active) return item;
			}

			return null; 
		}
	}
}

</script>



<style scoped>
.popup-item {
	/* position: fixed; 
	top: 0; 
	left: 0;
	width: 100%; 
	height: 100%; */
}

.modal-outter {
	/* position: absolute;
	left: 0;
	top: 0; 
	width: 100%; 
	height: 100%;  */
}

.modal-component {
	contain: strict;
	-webkit-overflow-scrolling: touch;
	position: fixed; 
	top: 0; 
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: scroll;
	/* -webkit-overflow-scrolling: touch; */
}

.modal-enter-active, .modal-leave-active {
	transition: all .6s; 
	transition-timing-function: cubic-bezier(0.18, 0.65, 0, 1); 
}

.modal-enter, .modal-leave-to {
	transform: translate3d(0, 100%, 0);
}
</style>
