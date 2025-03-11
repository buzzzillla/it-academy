<script setup>
import { ref } from 'vue';

let search = ref('')
let search2 = ref('')
let names = ref([])
let towns = ref([])

async function addNames() {
    names.value.push(search.value)
}

async function addTowns() {
    towns.value.push(search2.value)
}
</script>

<template>
  <div id="blocks">
  <div id="block1">
      <h2 id="names">Имена</h2>
  <input
      v-model="search"
      placeholder="Напишите имя"
      id="pole1">
  <button
      @click="addNames()"
      id="add">Добавить</button>
      <h2 id="place">Место для добавления</h2>
      <ul>
        <li v-for="name in names">{{ name }}</li>
      </ul>
  </div>
    <div id="block2">
    <h2 id="towns">Города</h2>
  <input
      v-model="search2"
      placeholder="Напишите город"
      id="pole1">
  <button
      @click="addTowns()"
      id="add">Добавить</button>
      <h2 id="place">Место для добавления</h2>
      <ol>
        <li v-for="town in towns">{{ town }}</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
#pole1 {
  width: 200px;
}

#add {
  padding-top: 2px;
  padding-bottom: 2px;
  margin-left: 10px
}

#blocks {
  display: flex;
}

#block1, #block2 {
  width: 50%;
}
</style>