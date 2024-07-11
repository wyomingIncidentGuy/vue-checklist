<template>
    <input type="text" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    name:'myInput',

    props: {
        modelValue: {
            type: String,
        }
    },

    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
    
</style>