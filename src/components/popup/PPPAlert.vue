<template>
    <div class="alert">
        <div class="alert-inner">
            I Am An Alert


            <div class="btn" @click="close">Close</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ppp-alert', 
    created(){

    },
    methods: {
        close(){
            this.$emit('close'); 
        }
    }
}
</script>

<style scoped>
.alert-inner {
    background-color: #FFF; 
    color: #555; 
    box-sizing: border-box;
    padding: 2em 16px; 
    position: absolute; 
    width: 80%; 
    left: 10%;
    top: 40%; 
    transform: translateY(-50%); 
    color: rgb(240, 130, 120); 
    text-align: center;
}

.btn {
    color: #555; 
    padding: 4px 16px;  
    width: 50%;
    margin: 2em auto 0 auto;
    border: 1px solid #BBB; 
    border-radius: 4px; 
}

.alert-enter-active, .alert-leave-active {
	transition: all .2s; 
}

.alert-enter, .alert-leave-to {
	transform: scale(1.3);
	opacity: 0; 
}
</style>

