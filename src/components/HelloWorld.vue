<template>
	<div class="hello">
		<h1 class="title">Modal</h1>
		<p class="para">PPP support present modal by passing a simple config</p>
		<pre v-highlightjs="simpleConfig" class="code-wrap"><code class="javascript"></code></pre>
		<ptn @click="sayHello" text="say hello" />

		<h2 class="sub-title">Get Input In Modal</h2>
		<p class="para">What Your Name ?</p>
		<pre v-highlightjs="getInputCode" class="code-wrap"><code class="javascript"></code></pre>
		<ptn @click="getInput" text="input name" />
		<span class="result" v-if="userInput">
			Name: {{ userInput }}
		</span>

		<h2 class="sub-title">Custom Transition Animate</h2>
		<p class="para">transition animate</p>
		<pre v-highlightjs="alertCode" class="code-wrap"><code class="javascript"></code></pre>

		<p class="para">and you should write `alert` transition css class in PPPAlert.vue: </p>
		<pre v-highlightjs="cssCode" class="code-wrap"><code class="css"></code></pre>
		<ptn @click="modalAlert" text="Alert" />


	</div>
</template>

<script>
import HelloPPP from '@/components/popup/HelloPPP.vue'; 
import GetInput from '@/components/popup/GetInput.vue';
import PPPAlert from '@/components/popup/PPPAlert.vue'; 

var simpleConfig = 
`import HelloPPP from 'a/b/c/d/HelloPPP.vue';

var hello = this.$ppp.create({
    type: 'modal', 
    component: HelloPPP,
    vbind: {
        style: {
            backgroundColor: '#FFF'
        }
    }
});
hello.launch(); 
`;

var getInputCode = 
`import GetInput from '@/components/popup/GetInput.vue';

var input = this.$ppp.create({
	type: 'modal', 
	component: GetInput,
	vbind: {
		style: {
			backgroundColor: '#FFF'
		}
	},
	von: {
		getName: name => {
			console.log('your name is', name);
			this.userInput = name;

			input.close(); 
		}
	}
});
input.launch();
`.replace(/(\t)/g, '    '); 


var alertCode = 
`import PPPAlert from '@/components/popup/PPPAlert.vue'; 

var al = this.$ppp.create({
	type: 'modal', 
	component: PPPAlert, 
	vbind: {
		style: {
			backgroundColor: 'rgba(0, 0, 0, .5)',
			color: '#fff'
		}
	},
	transitionName: 'alert'
}); 

al.launch();
`.replace(/(\t)/g, '    '); 

var cssCode = 
`.alert-enter-active, .alert-leave-active {
	transition: all .2s; 
}

.alert-enter, .alert-leave-to {
	transform: scale(1.3);
	opacity: 0; 
}
`.replace(/(\t)/g, '    '); 

export default {
	name: 'HelloWorld',
	data () {
		return {
			userInput: '',
			simpleConfig: simpleConfig,
			getInputCode: getInputCode,
			alertCode: alertCode,
			cssCode
		}
	},
	created(){

	},
	methods: {
		sayHello(){
			var hello = this.$ppp.create({
				type: 'modal', 
				component: HelloPPP,
				vbind: {
					style: {
						backgroundColor: '#FFF'
					}
				}
			});
			hello.launch(); 
		},
		getInput(){
			var input = this.$ppp.create({
				type: 'modal', 
				component: GetInput,
				vbind: {
					style: {
						backgroundColor: '#FFF'
					}
				},
				von: {
					getName: name => {
						console.log('your name is', name);
						this.userInput = name;

						input.close(); 
					}
				}
			});
			input.launch();
		},
		modalAlert(){
			var al = this.$ppp.create({
				type: 'modal', 
				component: PPPAlert, 
				vbind: {
					style: {
						backgroundColor: 'rgba(0, 0, 0, .5)',
						color: '#fff'
					}
				},
				transitionName: 'alert'
			}); 

			al.launch(); 
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
