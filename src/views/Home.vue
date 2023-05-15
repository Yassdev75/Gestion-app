<template>
  <div class="home-container container">
    <div class="row">
      <div class="col-6">
        <h1 class="text-white pb-4">Gerez toute votre vie dans notre application</h1>
        <div class="home-btn-container">
          <a class="home-btn mb-3" href="">Voir mes autres projets</a>
          <a class="home-btn" href="">Voir mes projets</a>
        </div>
      </div>
      <img class="col-6 home-illustration" src="../assets/images/illustration_home.svg" alt="">
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.home-container {
  min-height: 100vh;
  width: calc(100vw - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-btn-container {
  display: flex;
  flex-direction: column;
}

.home-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 64px;
  border: solid 1px white;
  text-transform: uppercase;
  color: hsla(160, 100%, 37%, 1);
}

.home-btn:first-child {
  background-color: rgb(0, 189, 35);
  color: white;
}

.home-btn:first-child:hover {
  background-color: rgb(45, 167, 68);
  transition: 0.4s;
  color: white;
}

.home-btn:nth-child(2):hover {
  color: white;
  transition: 0.4s;
}
</style>
