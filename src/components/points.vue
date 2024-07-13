<template>
  <ul>
    <point 
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