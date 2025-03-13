<script setup>
import { ref } from 'vue';

let search = ref('')
let search2 = ref('')
let search3 = ref('')
let search4 = ref('')
let names = ref([])
let towns = ref([])



async function addNames() {
  for (let i = 0; i < search3.value; i=i+1) {
    names.value.push(search.value)
  }
  search.value = '';
}

async function addTowns() {
  for (let i = 0; i < search4.value; i=i+1) {
    towns.value.push(search2.value)
  }
  search2.value = '';
}
</script>

<template>
  <div class="blocks">
    <div class="block1">
      <h2 class="name">Имена</h2>
      <p>Укажите имя</p>
      <input
          placeholder="Напишите имя"
          v-model="search"
          class="pole">
      <p>Сколько добавить?</p>
      <input
          v-model="search3"
          placeholder="Укажите кол-во повторений"
          class="pole">
      <button
          @click="addNames()"
          class="add1">Добавить</button>
      <h2>Место для добавления</h2>
      <ul>
        <li
            class="names"
            v-for="name in names"><em>{{ name }}</em></li>
      </ul>
    </div>
    <div class="block2">
      <h2 class="town">Города</h2>
      <p>Укажите город</p>
      <input
          placeholder="Напишите город"
          v-model="search2"
          class="pole">
      <p>Сколько добавить?</p>
      <input
          v-model="search4"
          placeholder="Укажите кол-во повторений"
          class="pole">
      <button
          @click="addTowns()"
          class="add2">Добавить</button>
      <h2>Место для добавления</h2>
      <ol>
        <li
            class="towns"
            v-for="town in towns">{{ town }}</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.add1, .add2 {
  display: flex;
  margin-top: 10px;
}

.blocks {
  display: flex;
}

.block1, .block2 {
  width: 50%;
}

.pole {
  width: 200px;
}

.towns {
  color: red;
  text-decoration: underline;
}

.names {
  color: limegreen;
}
</style>