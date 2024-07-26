<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:'myButton'
}
</script>

<style scoped>
    button{
        border-radius: 5px;
        border: 1px solid grey;
        background:none;
        cursor:pointer;
        font-size: 18px;
        font-family: 'Roboto-Regular';
        width: fit-content;
        height: 25px;
    }

    button:hover{
        background-color: rgb(245, 49, 49);
        border-color:rgb(245, 49, 49);
        color:white;
    }
</style>