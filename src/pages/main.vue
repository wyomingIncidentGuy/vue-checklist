<template>
    <addPoint 
        @addNewPoint = "addNewPoint"
    />

    <Points
        :points = "this.points"
        @editPoint = "editPoint"
        @addToRecycleBin = "addToRecycleBin"
        @deletePoint = "deletePoint"
    />

    <recycleBin 
        :recycle="this.recycleBin"
        @recover = "recoverPoint"
        @delete="deletePoint"
    />
</template>

<script>
  import {nanoid} from 'nanoid';
  import Points from '@/components/points.vue';
  import addPoint from '@/components/addPoint.vue';
  import recycleBin from '@/components/recycleBin.vue';

  export default {
    data(){
        return{
            points: [],
            recycleBin:[]
        }
    },

    methods: {
        editPoint(id, newPoint){
            this.points = this.points.map((point) => {
                if(point.id === id){
                    point.val = newPoint;
                }
                return point;
            });
        },

        addToRecycleBin(id){
            this.points.map( (point) => {
                if(point.id == id){
                    this.recycleBin.unshift(point);
                }
            });

            this.points = this.points.filter( (point) => point.id !== id);
        },

        recoverPoint(id){
            let recoveredPoint = this.recycleBin.filter((point) => point.id === id)[0];
            this.points.push(recoveredPoint);
            this.recycleBin = this.recycleBin.filter((point) => point.id !==id)
        },

        deletePoint(id){
            this.points = this.points.filter( (point) => point.id !== id);
            this.recycleBin = this.recycleBin.filter( (point) => point.id !== id);
        },

        addNewPoint(pointText){
            let newPoint = {};
            newPoint.id =  nanoid();
            newPoint.val = pointText;
            this.points.push(newPoint);
        },

        showDialog(){
            this.dialogVisible = !this.dialogVisible;
        }
    },

    components :{
        Points,
        addPoint,
        recycleBin
    }

  }
</script>

<style>
    
</style>