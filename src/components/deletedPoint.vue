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

<style>
    li{
        list-style-type: none;
    }
</style>