<template>
  <div>
    <li>
      <myCheckbox v-model="isDone.Done"/>
      <p :class = "isDone">{{ this.newText }}</p>

      <myButton
      @click = "edit"
      v-if = "!isDone.Done"
      >edit</myButton>

      <myButton
      @click = "del"
      >delete</myButton>
    
    </li>

    <dialogWindow
    :visible="isEdit"
    >
      <form action="" @click.prevent>
        <myInput v-model="newText"/>
        <myButton
        @click = "save"
        >save</myButton>
      </form>
      <myButton
      @click="cancelDialog"
      >cancel</myButton>
    </dialogWindow>
  </div>
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
        },
        
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
      },

      cancelDialog(){
        this.isEdit=false;
        this.newText = this.point.val;
      }
    }
}

</script>

<style>
    
</style>