<template>
    <li>
        <myParagraph 
            :textContent="point.val"
        />
        <myButton>recover</myButton>
    </li>
</template>

<script>


export default {
    props:{
        point:{
            type: Object
        }
    }
}

</script>

<style scoped>
    li{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 400px;
        max-width: 500px;
    }
</style>