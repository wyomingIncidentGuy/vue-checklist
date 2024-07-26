<template>
  <transition name="fade">
    <h1 v-if="points.length != 0">TO-DO LIST</h1>
  </transition>
    <ul>
      <transition-group name="points__list">
        <point class="point"
          v-for="point in points"
          :point="point"
          :id = "point.id"
          :key = point.id
          @editPoint="edit"
          @addToRecycleBin="addToRecycleBin"
          @deletePoint="deletePoint"
        />
      </transition-group>
    </ul>
</template>

<script>
  import point from './point.vue';

  export default {
    props: {
        points: Object,
    },

    emits: ["editPoint", "addToRecycleBin", "deletePoint"],

    methods: {
        edit(id, newText){
          this.$emit("editPoint", id, newText);
        },

        addToRecycleBin(id){
          this.$emit("addToRecycleBin", id);
        },

        deletePoint(id){
          this.$emit("deletePoint", id)
        }
    },

    components: {
      point
    }
  }
</script>

<style scoped>
  .point{
    display: flex;
    flex-direction: row;
    margin-top:15px;
    border-bottom: 1px solid #cfcdcd;
    padding-bottom:15px;
  }

  h1{
    text-align: center;
  }

  .points__list{
    display: block;
  }

  .points__list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .points__list-enter-active,
  .points__list-leave-active {
    transition: all .5s ease;
  }

  .points__list-enter-from,
  .points__list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
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