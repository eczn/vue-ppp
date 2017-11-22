<template>
	<div id="app">
		<ul class="tabs">
			<li class="tab-top" :key="idx" v-for="(route, idx) in routers">
				<router-link :to="route.path">
					{{ route.text }}
				</router-link>
			</li>
		</ul>
		<router-view class="outside" />


		<footer>varEczn</footer>
	</div>
</template>

<script>

export default {
	name: 'app',
	data(){
		return {
			routers: [
				{
					path: '/',
					text: 'Home'
				},
				{
					path: '/modal',
					text: 'Modal'
				}
			]
		}
	},
	created(){

	}
}
</script>

<style>
#app {
	font-family: consolas, Menlo; 
	max-width: 700px; 
	margin: 0 auto; 
}

.tabs, footer {
	list-style: none;
	padding: 5px 18px;  
	font-size: 24px; 
	background-color: #555;
	color: #EEE; 
}

.tabs {
	margin-bottom: 1em; 
}

.tabs a {
	color: inherit;
	text-decoration: none; 
}

.tab-top {
	display: inline-block; 
	margin-right: 1em; 
}

.outside {
	margin: 0 18px; 
}

.para {
	margin-bottom: 1em;
}

.title {
	margin-top: 1em; 
	margin-bottom: .2em; 
}

.sub-title {
	margin-top: 6em; 
	margin-bottom: .2em;
}

footer {
	margin-top: 4em; 
}

.code-wrap {
	margin: 0 -18px; 
	line-height: 1.25;
	background-color: rgb(35, 38, 40);
	color: #EEE; 
	font-family: consolas, menlo; 
	margin-bottom: 1em; 
	padding: 12px 18px; 

	overflow-x: scroll
}

.code-wrap code {
	font-family: inherit;
}

.hljs-keyword {
	color: rgb(204, 153, 204);
}

.hljs-attr, .hljs-attribute { color: rgb(255, 204, 102); }

.hljs-string { color: rgb(153, 204, 153); }

.hljs-comment { color: rgb(120, 120, 120); }

.hljs-function, .hljs-selector-class { color: rgb(249, 145, 87); }

.hljs-built_in { color: rgb(255, 204, 102); }

.hljs-number { color: rgb(249, 145, 87); }

.hljs-function .hljs-keyword { color: rgb(102, 153, 204); }

.CSS .hljs-built_in { color: rgb(102, 153, 204);  }
</style>
