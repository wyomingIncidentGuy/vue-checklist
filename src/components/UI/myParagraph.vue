<template>
        <p :class="className">{{ textContent }}</p>
</template>

<script>

export default {
    name: 'myParagraph',

    props:{
        className:{
            type: Object,
        },

        textContent:{
            type: String,
            required: true
        }
    }
}

</script>

<style scoped>
    p{
    font-size:18px;
  }

  .Done{
    text-decoration: line-through;
  }
</style>