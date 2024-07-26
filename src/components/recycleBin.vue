<template>
    <ul>
        <transition-group name="points__list">
            <deletedPoint class ="deleted__point" 
                v-for="point in recycle"
                :point="point"
                :id="point.id"
                :key="point.id"
                @recover="recover"
                @del="del"
            />
        </transition-group>
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

    emits: ["recover", "delete"],

    methods:{
        recover(id){
            this.$emit("recover", id);
        },

        del(id){
            this.$emit("delete", id);
        }
    },

    components:{
        deletedPoint
    }

}

</script>

<style scoped>
    ul{
        position:absolute;
        left:0;
        min-width: 400px;
    }

    .deleted__point{
        border-bottom: 1px solid #cfcdcd;
        padding-bottom:15px;
    }

    .points__list{
        display: block;
    }

    .points__list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .points__list-enter-active,
    .points__list-leave-active {
        transition: all .5s ease;
    }

    .points__list-enter-from,
    .points__list-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }
</style>