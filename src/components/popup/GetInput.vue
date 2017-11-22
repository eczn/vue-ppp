<template>
    <div class="alert">
        <h1>What's Your Name ?</h1>
        <div class="area">
            <input placeholder="input here" type="text" v-model="name" />
        </div>
        <ptn @click="output_name" text="submit & close" />

        <pre v-highlightjs="thisCode" class="code-wrap"><code class="javascript"></code></pre>
    </div>
</template>

<script>
var thisCode = 
`<template>
    <div class="alert">
        <h1>What's Your Name ?</h1>
        <div class="area">
            <input placeholder="input here" type="text" v-model="name" />
        </div>
        <ptn @click="output_name" text="submit & close" />
    </div>
</template>

<scrip` + `t>
export default {
    data(){
        return {
            name: ''
        }
    },
    created(){
        console.log('alert init')
    },
    methods: {
        output_name(){
            this.$emit('getName', this.name); 
        }
    }
}
</scrip` + `t>

<style scoped>
input {
    padding: 4px 18px; 
    border: 1px solid #BBB; 
    background-color: #EEE; 
}

.area {
    margin-bottom: 1em; 
}
</style>
`; 

export default {
    data(){
        return {
            name: '',
            thisCode: thisCode
        }
    },
    created(){
        console.log('alert init')
    },
    methods: {
        output_name(){
            this.$emit('getName', this.name); 
        }
    }
}
</script>

<style scoped>
input {
    padding: 4px 18px; 
    border: 1px solid #BBB; 
    background-color: #EEE; 
}

.area {
    margin-bottom: 1em; 
}

.code-wrap {
    margin-top: 1em;
}
</style>

