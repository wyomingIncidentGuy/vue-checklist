<template>
  <li>
    <template v-if = "isEdit == false">
      
      <myCheckbox v-model="isDone.Done"/>
      <p :class = "isDone">{{ point.val }}</p>

      <myButton
      @click = "edit"
      v-if = "!isDone.Done && !isEdit"
      >edit</myButton>

      <myButton
      @click = "del"
      >delete</myButton>

    </template>

    <template v-else>
      <form action="" @click.prevent>
        <myInput v-model="newText"/>
        <myButton
        @click = "save"
        >save</myButton>
      </form>
    </template>
  </li>
</template>

<script>
export default {
    props: {
      point:{
        type:Object,
      }
    },

    emits: [
      'editPoint', 
      'deletePoint',
    ],
  
    data(){
      return{
        isEdit:false,
        newText:this.point.val,

        isDone: {
          Done:false
        }
        
      }
    },

    methods: {
      edit(){
        this.isEdit = true;
        this.$emit('editPoint', this.point.id, this.newText);
      },

      del(){
        this.$emit('deletePoint', this.point.id)
      },

      save(){
          if(this.newText.length > 0){
            this.$emit('editPoint', this.point.id, this.newText);
            this.isEdit = false;
          }

          else{
            this.$emit("deletePoint", this.point.id);
          }
      }
    }
}

</script>

<style>
    
</style>