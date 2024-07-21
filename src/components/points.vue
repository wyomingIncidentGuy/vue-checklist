<template>
  <transition name = "points">
    <ul>
      <transition-group name="points__list">
        <point class="point"
        v-for="point in points"
        :point="point"
        :id = "point.id"
        :key = point.id
        @editPoint="edit"
        @deletePoint="del"
        />
      </transition-group>
    </ul>
  </transition>
    
</template>

<script>
  import point from './point.vue';

  export default {
    props: {
        points: Object,
    },

    emits: ["editPoint", "deletePoint"],

    methods: {
        edit(id, newText){
          this.$emit("editPoint", id, newText);
        },

        del(id){
          this.$emit("deletePoint", id);
        },
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
</style>