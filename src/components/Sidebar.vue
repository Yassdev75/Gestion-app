<template>
  <div class="sidebar px-3 pt-5">
    <!-- Logo -->
    <div class="d-flex justify-content-center mb-5">
      <router-link to="/">
        <img class="logo-nav" src="../assets/images/LogoDrive.png" alt="Logo navigation">
      </router-link>
    </div>

    <!-- Icônes de menu ou autres éléments de navigation -->
    <nav>
      <ul>
        <li class="mb-2">
          <router-link to="/todo">
            <img height="29" width="29" src="../assets/images/task_2_line.svg" alt="">
            Todo
          </router-link>
        </li>
        <hr class="bg-secondary">
        <li class="mb-2">
          <router-link to="/timer">
            <img height="29" width="29" src="../assets/images/list_check_2_line.svg" alt="">
            Timer
          </router-link>
        </li>
        <hr class="bg-secondary">
        <li class="mb-2">
          <router-link to="/agenda">
            <img height="29" width="29" src="../assets/images/watch_line.svg" alt="">            
            Agenda
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 180px;
  height: 100vh;
  background-color: rgb(32, 32, 32);
  position: fixed;
  left: 0;
  top: 0;
  font-size: 16px;
}

.sidebar a {
  text-decoration: none;
  color: rgb(203, 203, 203);
}

ul {
  list-style: none;
  padding: 0;
}

.logo-nav {
  height: 40px;
  width: 40px;
}
</style>