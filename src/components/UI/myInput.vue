<template>
    <input type="text" :value="modelValue" @input="updateInput" maxlength="30">
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
    input{
        border-radius:10px;
        min-width: 400px;
        height: 50px;
        border:1px solid grey;
        font-size:18px;
        font-family: 'Roboto-Regular';
    }

    input:focus{
      outline:rgb(245, 49, 49);
      border-color: rgb(245, 49, 49);
    }
</style>