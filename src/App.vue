<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <header>
  </header>
  <Sidebar />
  <main>
    <router-view></router-view>
  </main>
  <footer>

  </footer>
</template>

<style scoped>

main {
  margin-left: 180px;
  width: calc(100vw - 180px);
  min-height: 100vh;
  /* background-color: red; */
}
</style>
