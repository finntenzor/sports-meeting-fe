<template>
  <div id="app">
    <Home />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  components: {
    Home
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  background-color: #f2f2f2;
}
</style>
