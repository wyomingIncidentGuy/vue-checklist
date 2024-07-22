<template>
    <div class="app">
        <addPoint 
        @addNewPoint = "addNewPoint"
        />
        
        <Points
            :points = "this.points"
            @editPoint = "editPoint"
            @deletePoint = "addToRecycleBin"
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

        deletePoint(id, array){
            array = array.filter( (point) => point.id !== id);
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