<template>
    <ul>
        <deletedPoint 
            v-for="point in recycle"
            :point="point"
            :id="point.id"
            :key="point.id"
        />
    </ul>
</template>

<script>
import deletedPoint from './deletedPoint.vue';

export default {

    props:{
        recycle:{
            type: Array,
        }
    },

    components:{
        deletedPoint
    }

}

</script>

<style>
    
</style>