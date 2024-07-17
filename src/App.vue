<template>
    <div class="app">
        <addPoint 
        @addNewPoint = "addNewPoint"
        />
        
        <Points
            :points = "points"
            @editPoint = "editPoint"
            @deletePoint = "deletePoint"
        />
    </div>
</template>

<script>
  import {nanoid} from 'nanoid';
  import Points from './components/points.vue';
  import addPoint from './components/addPoint.vue';

  export default {
    data(){
        return{
            points: [],
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

        deletePoint(id){
            this.points = this.points.filter( (point) => point.id !== id);
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
    }

  }
</script>

<style>
    @font-face {
            font-family: 'Roboto-Regular';
            src: url('./assets/fonts/Roboto-Regular.ttf');
    }
    .app{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Roboto-Regular';
    }
</style>