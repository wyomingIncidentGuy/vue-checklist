<template>
  <li>
    <template v-if = "isEdit == false">
      <input type="checkbox" v-model = "isDone.Done">
      <p :class = "isDone">{{ point }}</p>
      <button class = "editButton" @click = "edit" v-if = "isDone.Done == false">edit</button>
      <button class = "deleteButton" @click = "del">delete</button>
    </template>
    <template v-else>
      <form action="" @click.prevent>
        <input type="text" v-model = "newText">
        <button  @click = "save">save</button>
      </form>
    </template>
  </li>
</template>

<script>
  export default {
    props: {
        point: String,
        id: Number,
    },
    emits: ["editPoint", "deletePoint"],
    data(){
      return{
        isEdit:false,
        newText:this.point,

        isDone: {
          Done:false
        },
        
      }
    },

    methods: {
        edit(){
          this.isEdit = true;
        },

        del(){
          this.$emit("deletePoint", this.id);
        },

        save(){
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