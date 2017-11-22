<template>
    <div class="alert">
        <h1>Hello Coder, Nice To Code You.</h1>
        <ptn @click="confirm" text="Close" />

        <pre v-highlightjs="compoCode" class="code-wrap"><code class="javascript"></code></pre>
    </div>
</template>

<script>

var compoCode = `<template>
    <div class="alert">
        <h1>Hello Coder, Nice To Code You.</h1>
        <ptn @click="confirm" text="Close" />
    </div>
</template>

<scrip` + `t>
export default {
    name: 'popup-alert',
    data(){
        return {
            name: ''
        }
    },
    created(){
        console.log('alert init')
    },
    methods: {
        confirm(){
            this.$emit('close'); 
        },
        output_name(){
            this.$emit('getName', this.name); 
        }
    }
}
</scrip` + `t>

<style scoped>

</style>
`

export default {
    name: 'popup-alert',
    data(){
        return {
            name: '',
            compoCode: compoCode
        }
    },
    created(){
        console.log('alert init')
    },
    methods: {
        confirm(){
            this.$emit('close'); 
        },
        output_name(){
            this.$emit('getName', this.name); 
        }
    }
}
</script>

<style scoped>
.code-wrap {
    margin-top: 1em;
}
</style>

