<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
  export default{

  }
</script>

<style>
    @font-face {
        font-family: 'Roboto-Regular';
        src: url('./assets/fonts/Roboto-Regular.ttf');
    }
    .app{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Roboto-Regular';
    }
</style>