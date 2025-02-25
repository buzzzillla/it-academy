
<script setup>
import { ref } from 'vue';
let API_KEY = 'ba0235c4d6ba3983024e60f0b3143eddf61513a8';
// создание переменной с помощью ref из фреймворка vue.js
let search = ref('');

// функция для получения
async function getCompanies() {
  // ссылка на сервис с информацией о компаниях
  let url = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party'
  // данные которые необходимо передать сервису
  let data = {
    query: 'Сбербанк',
  };
  let options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token' + API_KEY,
    },
  };
  let response = await axios.get('Название сайта')
  // ПОЛУЧЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ  (Hi OPi HA MiNЯ)
  console.log(search.value)
}
</script>

<template>
  <div class="app">
    <div class="companies-card">
      <h1 class="card-title">
        Поиск организации
      </h1>


      <div class="search-form">
        <input
            v-model="search"
            class="search-input"
            id="search-input"
            placeholder="Напишите название организации">
        <button
            class="search-button"
            id="search-button"
            @click="getCompanies">Найти</button>
      </div>



      <div class="companies-list">
        <div class="companies-title">
          Найденные организации:
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
