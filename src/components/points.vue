<template>
  <ul>
    <point class="point"
    v-for="point in points"
    :point="point"
    :id = "point.id"
    :key = point.id
    @editPoint="edit"
    @deletePoint="del"
    />
  </ul>
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
</style>