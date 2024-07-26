<template>
  <form action="" @submit.prevent>
    <myInput
    v-model="newPointValue"
    />

    <myButton class="add__point__button"
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
          this.newPointValue = this.newPointValue.replace(/^\s+|\s+$/g, "");
          if(this.newPointValue.length > 0){
            this.$emit('addNewPoint', this.newPointValue);
            this.newPointValue = "";
          }
          else{
            alert('you cannot add an empty point');
          }
        }
    }
  }
</script>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
  }

  .add__point__button{
    align-self: flex-end;
    margin-top: 15px;
  }
</style>