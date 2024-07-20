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
        <myButton
        @click = "edit"
        v-if = "!isDone.Done"
        >edit</myButton>

        <myButton
        @click = "del"
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
        this.$emit('deletePoint', this.point.id);
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
        this.isEdit = false;
        this.newText = this.point.val;
      }
    }
}

</script>

<style>
 .point__item{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 400px;
    max-width: 500px;
  }

  .form__buttons{
    display:flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .point__content{
    display: flex;
  }
</style>