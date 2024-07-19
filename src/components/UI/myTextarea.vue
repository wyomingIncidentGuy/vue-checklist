<template>
    <textarea :value="modelValue"></textarea>
</template>

<script>
export default {
    name: 'myTextarea',

    props: {
        modelValue: {
            type: String,
        }
    },

    methods: {
        updateTextarea(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}

</script>

<style scoped>
    
</style>