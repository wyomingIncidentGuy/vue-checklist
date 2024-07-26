<template>
  <div>
    <li class="point__item">
      <div class="point__content">
        <myCheckbox v-model="isDone.Done"/>

        <myParagraph 
          :textContent="newText"
          :className="isDone"
        />
      </div>

      <div class="point__buttons">
        <transition name="fade">
          <myButton
            @click = "edit"
            v-if = "!isDone.Done"
          >edit</myButton>
        </transition>

        <myButton
          @click = "addToRecycleBin"
        >delete</myButton>
      </div>
    </li>

    <dialogWindow
    :visible="isEdit"
    >
      <form action="" @click.prevent>
        <myInput v-model="newText"/>

        <div class="form__buttons">
          <myButton
            @click = "save"
          >save</myButton>

          <myButton
            @click="cancelDialog"
          >cancel</myButton>

        </div>
        </form>
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
      'addToRecycleBin',
      'deletePoint'
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

      addToRecycleBin(){
        this.$emit('addToRecycleBin', this.point.id);
      },

      save(){
          if(this.newText.length > 0){
            this.$emit('editPoint', this.point.id, this.newText);
            this.isEdit = false;
          }

          else{
            this.isEdit = false;
            this.$emit("deletePoint", this.point.id);
          }
      },

      cancelDialog(){
        this.isEdit = false;
        this.newText = this.point.val;
      }
    }
}

</script>

<style scoped>
 .point__item{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 400px;
    max-width: 500px;
  }

  .form__buttons>button{
    margin-top: 15px;
  }

  .form__buttons{
    display:flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
  }

  .point__content{
    display: flex;
  }

  .fade-enter-active,
  .fade-leave-active {
      transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
      opacity: 0;
  }
</style>