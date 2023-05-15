<template>
  <div class="todo-container container-fluid">
    <div class="p-3 h-100">
      <h1>Ma journée</h1>
      <!-- <input class="todo-input" type="text"> -->
      <div class="input-group todo-input mb-3">
        <span class="input-group-text" id="basic-addon1">+</span>
        <input type="text" class="form-control" placeholder="Entrez votre tâche" aria-label="task"
          aria-describedby="basic-addon1">
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.todo-container {
  min-height: 100vh;
  width: calc(100vw - 180px);
}

.todo-input {
  width: 75%;
}
</style>