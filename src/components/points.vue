<template>
  <li>
    <template v-if = "isEdit == false">
      
      <myCheckbox v-model="isDone.Done"/>
      <p :class = "isDone">{{ point }}</p>

      <myButton
      @click = "edit"
      v-if = "!isDone.Done && !editing"
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
import MyCheckbox from './UI/myCheckbox.vue';

  export default {
    props: {
        point: String,
        id: Number,
        editing: Boolean
    },

    emits: ["editPoint", "deletePoint", "hideAndShowEditButton"],
    
    data(){
      return{
        isEdit:false,
        newText:this.point,

        isDone: {
          Done:false
        }
        
      }
    },

    methods: {
        edit(){
          this.isEdit = true;
          this.$emit("hideAndShowEditButton");
        },

        del(){
          this.$emit("deletePoint", this.id);
        },

        save(){
          this.$emit("hideAndShowEditButton");
          if(this.newText.length > 0){
            this.$emit("editPoint", this.id, this.newText);
            this.isEdit = false;
          }

          else{
            this.$emit("deletePoint", this.id);
          }

        }
    }
  }
</script>

<style>
  li{
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  .editButton{
    height: 20px;
  }

  p.Done{
    text-decoration: line-through;
  }
</style>