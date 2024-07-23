<template>
    <input type="checkbox" :value="!modelValue" @change="updateInput" key="checkbox">
</template>

<script>

export default {
    name:'myCheckbox',

    props:{
        modelValue:{
            type: Boolean,
            default:false
        }
    },

    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.checked)
        }
    }
}

</script>

<style scoped>
    
</style>