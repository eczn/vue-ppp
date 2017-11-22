<template>
    <button class="ptn" @click="btnPressed">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'ptn',
    props: ['text'], 
    methods: {
        btnPressed(e){
            this.$emit('click', e); 
        }
    }
}
</script>

<style scoped>
.ptn {
    background: rgb(87, 123, 157); 
    padding: .5em 1em; 
    font-size: 120%; 
    border: none; 
    color: #FFF;
    border-radius: 4px; 
    -webkit-appearance: none; 
}
</style>

