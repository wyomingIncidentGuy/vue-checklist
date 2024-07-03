<template>
  <form action="" @click.prevent>
    <input type="text" v-model = "newPointValue">
    <button @click = "add">create point</button>
  </form>
</template>

<script>
  export default {
    props: {},
    emits: ["addNewPoint"],
    data(){
      return{
        newPointValue:'',
      }
    },

    methods: {
        add(){
          if(this.newPointValue.length > 0){
            this.$emit('addNewPoint', this.newPointValue);
            this.newPointValue = "";
          }
          else{
            alert('you cannot add empty point');
          }
        }
    }
  }
</script>

<style>

</style>