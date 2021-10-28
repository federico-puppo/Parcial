<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Parcial NT2 - Federico Puppo</h1>
      <br>
      <Navbar />
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

h1 {
  color: blue;
}
#app {
 background: rgb(16,248,251);
background: linear-gradient(0deg, rgba(16,248,251,1) 0%, rgba(210,253,45,1) 100%); 
}
</style>

