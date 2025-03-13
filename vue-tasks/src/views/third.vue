<script setup>
function a1() {
  for (let i = 0; i < 5; i = i+1) {

  }
}
</script>

<template>
  <div class="buttons">
    <div
        @click="a1"
        class="button">
  <button>Создать 5 цифр (начиная с 0)</button>
    </div>
    <div class="button">
  <button>Создать 5 цифр (начиная с 1)</button>
    </div>
    <div class="button">
  <button>Создать 10 цифр (начиная с 0)</button>
    </div>
    <div class="button">
  <button>Создать 10 цифр (начиная с 1)</button>
    </div>
    <div class="button">
  <button>Создать 10 цифр (начиная с 0 с шагом 2)</button>
    </div>
    <div class="button">
  <button>Создать 10 цифр (начиная с 1 с шагом 2)</button>
    </div>
    <div class="button">
  <button>Создать 20 цифр (начиная с 1, каждая чётная - красная)</button>
    </div>
  </div>
</template>

<style scoped>
.button {
  margin-top: 10px;
}
</style>