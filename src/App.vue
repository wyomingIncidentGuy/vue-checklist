<template>
    <ul>
        <Points 
            v-for = "point in points"
            :point = "point.val"
            :id = "point.id"
            :key = point.id
            :editing = "isUserEditing"
            @editPoint = "editPoint"
            @deletePoint = "deletePoint"
            @hideAndShowEditButton = "hideAndShowEditButton"
        />
    </ul>
    
  <addPoint 
    @addNewPoint = "addNewPoint"
  />
</template>

<script>
  import Points from './components/points.vue';
  import addPoint from './components/addPoint.vue';

  export default {
    data(){
        return{
            points: [
                {
                    id:1,
                    val:'point1'
                },
                {
                    id:2,
                    val: 'point2'
                }
            ],

            isUserEditing: false,
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
            newPoint.id =  this.points.length + 1;
            newPoint.val = pointText;
            this.points.push(newPoint);
        },

        hideAndShowEditButton(){
            this.isUserEditing = !this.isUserEditing;
        }
    },

    components :{
        Points,
        addPoint,
    }

  }
</script>

<style scoped>
    
</style>