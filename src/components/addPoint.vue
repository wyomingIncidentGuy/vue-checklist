<template>
  <form action="" @submit.prevent>
    <myInput v-model="newPointValue"/>

    <myButton
    @click = "add"
    >create point</myButton>

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